import { NextRequest, NextResponse } from "next/server";

const DEFAULT_CANONICAL_URL = "https://zoriography.com";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"]);

const ensureProtocol = (value: string) =>
  /^https?:\/\//i.test(value) ? value : `https://${value}`;

const normalizeUrl = (value: string) =>
  ensureProtocol(value).replace(/\/+$/, "");

const getCanonicalUrl = () => {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : DEFAULT_CANONICAL_URL);

  return new URL(normalizeUrl(value));
};

const isCanonicalRedirectEnabled = () =>
  process.env.ENFORCE_CANONICAL_REDIRECTS === "true";

const shouldEnforceCanonicalHost = () =>
  isCanonicalRedirectEnabled() &&
  process.env.VERCEL === "1" &&
  process.env.VERCEL_ENV === "production";

export const middleware = (request: NextRequest) => {
  if (!shouldEnforceCanonicalHost()) {
    return NextResponse.next();
  }

  const hostHeader = request.headers.get("host");
  if (!hostHeader) {
    return NextResponse.next();
  }

  const canonicalUrl = getCanonicalUrl();
  const canonicalHost = canonicalUrl.host.toLowerCase();
  const requestHost = hostHeader.toLowerCase();
  const requestHostname = requestHost.split(":")[0];

  if (
    LOCAL_HOSTS.has(requestHostname) ||
    requestHostname.endsWith(".local") ||
    requestHostname === canonicalHost
  ) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = canonicalUrl.protocol;
  redirectUrl.host = canonicalHost;
  redirectUrl.port = "";

  return NextResponse.redirect(redirectUrl, 308);
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

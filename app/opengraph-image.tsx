import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const tags = ["Natura", "Paesaggio", "Wildlife", "Viaggi", "Astrofotografia"];

const OpengraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, #2b2f3b, #121216 45%, #08080a 100%)",
          color: "#f8f6f3",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "36px",
            padding: "52px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 26,
                  letterSpacing: "0.4em",
                  textTransform: "uppercase",
                  color: "rgba(248,246,243,0.7)",
                }}
              >
                Portfolio fotografico
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 88,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  display: "flex",
                  maxWidth: "860px",
                  fontSize: 34,
                  lineHeight: 1.3,
                  color: "rgba(248,246,243,0.88)",
                }}
              >
                Natura, paesaggio, fauna selvatica, viaggi e cielo notturno in
                una raccolta di scatti autoriali.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              {tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.18)",
                    padding: "12px 22px",
                    fontSize: 22,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    color: "rgba(248,246,243,0.78)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );

export default OpengraphImage;

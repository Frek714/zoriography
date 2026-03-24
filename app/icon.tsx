import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

const Icon = () =>
  new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at top left, #2b2f3b, #121216 55%, #08080a 100%)",
          borderRadius: "112px",
          color: "#f8f6f3",
          fontSize: 240,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Z
      </div>
    ),
    size
  );

export default Icon;

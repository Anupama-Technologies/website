import { ImageResponse } from "next/og";

export const alt = "Anupama Technologies — Building technology products people love to use.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0f0a1f 0%, #24164d 100%)",
          color: "#f7f4ff",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, fontWeight: 600 }}>ANUPAMA TECHNOLOGIES</div>
        <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, maxWidth: 900 }}>
          Building technology products people love to use.
        </div>
        <div style={{ fontSize: 28, color: "#a9a2bd" }}>anupamatech.com</div>
      </div>
    ),
    size,
  );
}

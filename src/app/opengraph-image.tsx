import { ImageResponse } from "next/og";

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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#3f2a1d",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#f8f5f0" }}>
          Parquet <span style={{ color: "#b8873a", marginLeft: 16 }}>Doors</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#f8f5f0cc", maxWidth: 900 }}>
          Uși de interior, consultanță, măsurători și montaj
        </div>
      </div>
    ),
    { ...size }
  );
}

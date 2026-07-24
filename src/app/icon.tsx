import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3f2a1d",
          color: "#f8f5f0",
          fontSize: 34,
          fontWeight: 700,
          fontFamily: "serif",
          borderRadius: 12,
        }}
      >
        PD
      </div>
    ),
    { ...size }
  );
}

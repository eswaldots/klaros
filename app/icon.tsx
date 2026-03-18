import { ImageResponse } from "next/og";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "#ffedd5",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        justifyContent: "center",
        fontWeight: 900,
        color: "#7c2d12",
      }}
    >
      K
    </div>,
    {
      ...size,
    },
  );
}

export const size = {
  width: 32,
  height: 32,
};

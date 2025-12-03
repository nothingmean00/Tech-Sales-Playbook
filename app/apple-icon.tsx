import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 32,
        }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          width="120"
          height="120"
        >
          <path d="M13 9L23 16L13 23V9Z" fill="white" fillOpacity="0.95" />
          <path d="M9 25L14 20L19 22.5L24 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M21 15H24V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}


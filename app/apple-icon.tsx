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
          background: "linear-gradient(135deg, #1a2234 0%, #0f141d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 24,
          border: "2px solid rgba(212, 162, 22, 0.2)",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          width="100"
          height="100"
        >
          <defs>
            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A216" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          {/* Stylized "P" for Playbook - elegant serif style */}
          <path d="M10 8H18C20.5 8 22.5 10 22.5 12.5C22.5 15 20.5 17 18 17H14V24H10V8Z" fill="url(#brassGrad)" />
          <path d="M14 11.5H17.5C18.3 11.5 19 12.2 19 13C19 13.8 18.3 14.5 17.5 14.5H14V11.5Z" fill="#1a2234" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}

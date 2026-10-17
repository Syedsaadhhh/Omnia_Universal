import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Omniasec Labs — Technology research and product development";
export const dynamic = "force-static";

export default async function OpenGraphImage() {
  const buffer = await readFile(
    join(process.cwd(), "public/fonts/schibsted-og.ttf"),
  );
  const font = buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#101f1d",
        color: "#eaf1eb",
        fontFamily: "Schibsted",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="50" height="50" viewBox="0 0 56 56" fill="#b3d4a0">
          <path d="M7 7h25v9H16v25H7Z M25 25h25v25H25v-9h16v-7H25Z" />
        </svg>
        <span style={{ fontSize: 32 }}>Omniasec Labs</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 68,
          lineHeight: 1.08,
          letterSpacing: -2,
        }}
      >
        <span>Research real problems.</span>
        <span style={{ color: "#b3d4a0" }}>Build what proves useful.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#a5beb6",
        }}
      >
        <span>Technology research &amp; product development</span>
        <span>omniaseclabs.com</span>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Schibsted", data: font, weight: 600, style: "normal" }],
    },
  );
}

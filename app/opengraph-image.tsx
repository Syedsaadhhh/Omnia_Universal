import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#060811", color: "#f4f7ff", fontFamily: "Arial, sans-serif", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: 999, top: -390, right: -150, background: "rgba(83,105,255,.35)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: 999, bottom: -300, left: -100, background: "rgba(168,85,247,.25)", filter: "blur(80px)" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 54, height: 54, border: "3px solid #67e8f9", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 25 }}>O</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <b style={{ fontSize: 26, letterSpacing: 6 }}>OMNIA</b>
            <span style={{ fontSize: 12, letterSpacing: 5, color: "#8f9bb8" }}>SEC AI LABS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
          <span style={{ color: "#67e8f9", fontSize: 15, letterSpacing: 4, marginBottom: 18 }}>INDEPENDENT AI & CYBERSECURITY LAB</span>
          <h1 style={{ fontSize: 70, lineHeight: 1.02, margin: 0, letterSpacing: -3 }}>Building the intelligence layer for autonomous systems.</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, color: "#9aa5bf" }}>
          <span>Agentic AI · Cybersecurity · Infrastructure</span>
          <span>Karachi, Pakistan</span>
        </div>
      </div>
    </div>,
    size
  );
}

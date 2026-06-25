export function CommandPanel() {
  return (
    <div className="command-panel" aria-label="Omnia system workflow visualization">
      <div className="panel-header">
        <span>OMNIA / EXECUTION TRACE</span>
        <b><i /> SYSTEM ACTIVE</b>
      </div>
      <div className="panel-map">
        <div className="map-grid" />
        <div className="core-node">
          <div className="core-orbit"><span /><span /><span /></div>
          <strong>O</strong>
          <small>CONTROL<br />CORE</small>
        </div>
        <div className="map-node node-one"><i>01</i><b>Observe</b><span>Signal acquired</span></div>
        <div className="map-node node-two"><i>02</i><b>Reason</b><span>Intent resolved</span></div>
        <div className="map-node node-three"><i>03</i><b>Act</b><span>Tools engaged</span></div>
        <div className="map-node node-four"><i>04</i><b>Verify</b><span>Outcome checked</span></div>
        <svg viewBox="0 0 620 500" aria-hidden="true">
          <path d="M160 110C230 140 250 190 292 229" />
          <path d="M460 110C390 140 370 190 328 229" />
          <path d="M160 390C230 360 250 310 292 271" />
          <path d="M460 390C390 360 370 310 328 271" />
        </svg>
      </div>
      <div className="panel-log">
        <p><time>00:01.024</time><span className="ok">✓</span> Human objective accepted</p>
        <p><time>00:01.318</time><span>◆</span> Policy boundary loaded</p>
        <p><time>00:01.902</time><span>↯</span> Specialized agent selected</p>
        <p className="active"><time>00:02.441</time><span /> Executing with traceability</p>
      </div>
      <div className="panel-footer"><span>SECURE AUTONOMY</span><span>HUMAN OVERSIGHT</span><span>LOCAL-FIRST</span></div>
    </div>
  );
}

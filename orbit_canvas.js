import { ID_ICOME } from "./id_icome.js";

export function startOrbitCanvas() {
  const canvas = document.getElementById("orbitCanvas");
  const ctx = canvas.getContext("2d");

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const r = 60 + Math.sin(t) * 10;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = "#7dd3fc";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "#7dd3fc";
    ctx.font = "24px system-ui";
    ctx.fillText(ID_ICOME.Orbit, cx - 10, cy + 10);

    t += 0.03;
    requestAnimationFrame(draw);
  }

  draw();
}

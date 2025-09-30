import { useEffect, useRef } from "react";

export default function Heart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let t = 0;

    function draw() {
      // Fondo semitransparente para estela
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 500; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const r = 16 * Math.pow(Math.sin(angle), 3);
        const x = centerX + r * 15;
        const y =
          centerY -
          (13 * Math.cos(angle) -
            5 * Math.cos(2 * angle) -
            2 * Math.cos(3 * angle) -
            Math.cos(4 * angle)) *
            15;

        ctx.fillStyle = `hsl(${(t * 10 + i) % 360}, 100%, 50%)`;
        ctx.fillRect(x, y, 2, 2);
      }

      // Escribir el nombre
      ctx.font = "50px Arial";
      ctx.fillStyle = "#ff00ff";
      ctx.textAlign = "center";
      ctx.fillText("Danae", centerX, centerY + 10);

      t += 0.1;
      requestAnimationFrame(draw);
    }

    draw();

    // Ajustar tamaño si cambia la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
}

import { useEffect, useState } from "react";

export function ContadorAnimado({ objetivo, duracion = 1000, className = "" }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    let inicio = 0;
    const incremento = objetivo / (duracion / 16); // ~60 FPS

    const animar = () => {
      inicio += incremento;
      if (inicio < objetivo) {
        setContador(Math.floor(inicio));
        requestAnimationFrame(animar);
      } else {
        setContador(objetivo);
      }
    };

    requestAnimationFrame(animar);
  }, [objetivo, duracion]);

  return <span className={className}>{contador.toLocaleString()}</span>;
}

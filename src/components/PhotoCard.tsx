import { useRef, type PointerEvent, type ReactNode } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

/** Card de foto: só o card sob o mouse se mexe (inclina, desloca a imagem e ganha brilho). */
export default function PhotoCard({ src, alt, className = "", children }: Props) {
  const card = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = card.current!;
    const b = c.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    c.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) translateY(-8px) scale(1.04)`;
    img.current!.style.transform = `translate(${-x * 14}px, ${-y * 14}px) scale(1.12)`;
    c.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    c.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };

  const onLeave = () => {
    card.current!.style.transform = "";
    img.current!.style.transform = "";
  };

  return (
    <div ref={card} className={`ph ${className}`} onPointerMove={onMove} onPointerLeave={onLeave}>
      <img ref={img} src={src} alt={alt} loading="lazy" />
      {children}
    </div>
  );
}

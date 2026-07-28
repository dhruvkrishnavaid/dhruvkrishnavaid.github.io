import { useEffect, useRef } from "react";

const BG_IMAGE_1 = "/images/image.webp";
const FRONT_VIDEO = "/videos/hf.mp4";
const OVERLAY_IMAGE = "/images/overlay.png";

const REVEAL_RADIUS = 260;

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const target = useRef({ x: -9999, y: -9999 });
  const smooth = useRef({ x: -9999, y: -9999 });
  const parallaxTarget = useRef({ x: 0, y: 0 });
  const parallaxSmooth = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.current = { x, y };
      parallaxTarget.current = {
        x: ((x - rect.width / 2) / rect.width) * 16,
        y: ((y - rect.height / 2) / rect.height) * 16,
      };
    };

    const handleLeave = () => {
      target.current = { x: -9999, y: -9999 };
      parallaxTarget.current = { x: 0, y: 0 };
    };

    section.addEventListener("pointermove", handleMove);
    section.addEventListener("pointerleave", handleLeave);

    const canvas = document.createElement("canvas");
    const size = REVEAL_RADIUS * 2;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const tick = () => {
      smooth.current.x += (target.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (target.current.y - smooth.current.y) * 0.1;
      parallaxSmooth.current.x +=
        (parallaxTarget.current.x - parallaxSmooth.current.x) * 0.06;
      parallaxSmooth.current.y +=
        (parallaxTarget.current.y - parallaxSmooth.current.y) * 0.06;

      if (ctx && maskRef.current) {
        const rect = section.getBoundingClientRect();
        ctx.clearRect(0, 0, size, size);
        const grad = ctx.createRadialGradient(
          size / 2,
          size / 2,
          0,
          size / 2,
          size / 2,
          size / 2,
        );
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(0.4, "rgba(255,255,255,1)");
        grad.addColorStop(0.6, "rgba(255,255,255,0.75)");
        grad.addColorStop(0.75, "rgba(255,255,255,0.4)");
        grad.addColorStop(0.88, "rgba(255,255,255,0.12)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
        const url = canvas.toDataURL();
        const el = maskRef.current;
        el.style.width = `${rect.width}px`;
        el.style.height = `${rect.height}px`;
        const bx = smooth.current.x - REVEAL_RADIUS;
        const by = smooth.current.y - REVEAL_RADIUS;
        const maskStyle = `url("${url}")`;
        el.style.setProperty("-webkit-mask-image", maskStyle);
        el.style.setProperty("mask-image", maskStyle);
        const pos = `${bx}px ${by}px`;
        el.style.setProperty("-webkit-mask-position", pos);
        el.style.setProperty("mask-position", pos);
        el.style.setProperty("-webkit-mask-repeat", "no-repeat");
        el.style.setProperty("mask-repeat", "no-repeat");
      }

      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(${-parallaxSmooth.current.x}px, ${-parallaxSmooth.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="font-helvetica-neue relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Layer 1: Grid */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 z-0"
        style={{ opacity: 0.1 }}
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#64748b"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect
            width="120%"
            height="120%"
            x="-10%"
            y="-10%"
            fill="url(#grid)"
          />
        </svg>
      </div>

      {/* Layer 2: Background image */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${BG_IMAGE_1}")` }}
      />

      {/* Layer 3: Hero text */}
      <div className="pointer-events-none absolute inset-x-0 top-20 z-20 flex justify-center sm:top-28 md:top-32">
        <h1
          className="xs:text-[5.5rem] text-center text-[4.5rem] leading-[0.9] text-white uppercase sm:text-[10rem] md:text-[13rem] lg:text-[16rem]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <img
            src="/images/hero-banner.png"
            alt="Dhruv Krishna Vaid"
            className="mx-auto h-auto w-full sm:w-[80%] md:w-[70%] lg:w-[70%]"
          />
        </h1>
      </div>

      {/* Layer 4: Overlay image */}
      <img
        src={OVERLAY_IMAGE}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 z-25 h-full w-full object-cover"
      />

      {/* Layer 5: Spotlight reveal (video) */}
      <div ref={maskRef} className="pointer-events-none absolute inset-0 z-30">
        <video
          src={FRONT_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ clipPath: "inset(40% 0 0 0)" }}
        />
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Activity, Zap, Flame } from "lucide-react";

export const DEFAULT_SERVICES = [
  {
    id: "rmt",
    title: "Massage Therapy (RMT)",
    tag: "Core Discipline",
    highlight: "Deep Tissue & Swedish",
    category: "rmt",
    src: "/images/massage-therapy.png",
    icon: Heart,
    color: "#52b788",
    badge: "ICBC & Direct Billing"
  },
  {
    id: "physio",
    title: "Physiotherapy & Rehab",
    tag: "Clinical Care",
    highlight: "Mobility & Joint Rehab",
    category: "physio-kin",
    src: "/images/physiotherapy.jpg",
    icon: Activity,
    color: "#74c69d",
    badge: "ICBC Pre-Approved"
  },
  {
    id: "kinesiology",
    title: "Kinesiology",
    tag: "Active Rehab",
    highlight: "1-on-1 Guided Recovery",
    category: "physio-kin",
    src: "/images/clinic-treatment-room.jpg",
    icon: Activity,
    color: "#e9c46a",
    badge: "Active Recovery Plan"
  },
  {
    id: "ims",
    title: "IMS / Dry Needling",
    tag: "Specialized",
    highlight: "Reset Deep Muscle Knots",
    category: "specialized",
    src: "/images/acupuncture-ims.jpg",
    icon: Zap,
    color: "#f4a261",
    badge: "Fast Trigger Relief"
  },
  {
    id: "shockwave",
    title: "Shockwave Therapy",
    tag: "Acoustic Healing",
    highlight: "Plantar & Tendon Relief",
    category: "specialized",
    src: "/images/clinic-room-bed.jpg",
    icon: Zap,
    color: "#52b788",
    badge: "Soundwave Cellular Repair"
  },
  {
    id: "hot-stone",
    title: "Hot Stone Therapy",
    tag: "Thermal Healing",
    highlight: "Heated Basalt Relaxation",
    category: "specialized",
    src: "/images/clinic-reception.jpg",
    icon: Flame,
    color: "#e9c46a",
    badge: "Deep Tension Release"
  }
];

export function OriginkitBase_RoundCarousel({
  items = DEFAULT_SERVICES,
  imageWidth = 240,
  imageHeight = 180,
  spacing = 2.2,
  speed = 4.5,
  direction = "right",
  drag = true,
  sensitivity = 4,
  tilt = -5,
  perspective = 1800,
  cornerRadius = 20,
  innerDim = 2.5,
  background = "transparent",
  style = {},
}) {
  const serviceList = items && items.length > 0 ? items : DEFAULT_SERVICES;
  const count = serviceList.length;

  const ringRef = useRef(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0, moved: false });
  const [isHovered, setIsHovered] = useState(false);

  const angle = 360 / count;
  const factor = 1 + spacing * 0.15;
  const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
  const radiusPx = cornerRadius;
  const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    const apply = () => {
      ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`;
    };
    apply();

    const draw = (now) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;
      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else if (!isHovered) {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, degPerSec, count, isHovered]);

  const onPointerDown = (e) => {
    if (!drag) return;
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    } catch (_) {}
    dragRef.current = { active: true, x: e.clientX, moved: false };
    velRef.current = 0;
  };

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) {
      d.moved = true;
    }
    d.x = e.clientX;
    const k = 0.25 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };

  const onPointerUp = (e) => {
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (_) {}
    dragRef.current.active = false;
  };

  const faceBase = {
    position: "absolute",
    inset: 0,
    borderRadius: `${radiusPx}px`,
    overflow: "hidden",
    backfaceVisibility: "hidden",
  };

  return (
    <div
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? (dragRef.current.active ? "grabbing" : "grab") : "default",
        touchAction: "pan-y",
        userSelect: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt}deg)`,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          ref={ringRef}
          style={{
            position: "relative",
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            transformStyle: "preserve-3d",
            transition: "transform 0.05s linear",
          }}
        >
          {serviceList.map((item, i) => {
            const IconComponent = item.icon || Sparkles;
            return (
              <div
                key={item.id || i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Face: Rich Interactive Glass Card */}
                <div
                  style={{
                    ...faceBase,
                    background: `linear-gradient(180deg, rgba(13, 40, 24, 0.90) 0%, rgba(10, 28, 18, 0.95) 100%)`,
                    border: "1.5px solid rgba(116, 198, 157, 0.45)",
                    boxShadow: "0 16px 36px -8px rgba(0, 0, 0, 0.65), 0 0 24px rgba(82, 183, 136, 0.25)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                  }}
                >
                  {/* Subtle Background Image / Glow */}
                  {item.src && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.18,
                        zIndex: 0,
                        mixBlendMode: "luminosity",
                      }}
                    />
                  )}

                  {/* Card Header */}
                  <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#e9c46a",
                        background: "rgba(233, 196, 106, 0.18)",
                        padding: "3px 8px",
                        borderRadius: "999px",
                        border: "1px solid rgba(233, 196, 106, 0.35)",
                      }}
                    >
                      <Sparkles size={11} color="#e9c46a" />
                      {item.tag}
                    </span>

                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: "rgba(116, 198, 157, 0.2)",
                        border: "1px solid rgba(116, 198, 157, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color || "#74c69d",
                      }}
                    >
                      <IconComponent size={15} />
                    </div>
                  </div>

                  {/* Card Main */}
                  <div style={{ position: "relative", zIndex: 1, margin: "4px 0" }}>
                    <h4
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: "800",
                        color: "#ffffff",
                        margin: "0 0 3px 0",
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.76rem",
                        color: "#c4ebd0",
                        margin: 0,
                        lineHeight: 1.3,
                        opacity: 0.95,
                      }}
                    >
                      {item.highlight}
                    </p>
                  </div>

                  {/* Card Footer with Link */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "8px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "0.7rem",
                        color: "#95d5b2",
                        fontWeight: "600",
                      }}
                    >
                      <ShieldCheck size={12} color="#74c69d" />
                      {item.badge || "Direct Billing"}
                    </span>

                    <Link
                      to={`/services?cat=${item.category || "rmt"}`}
                      onClick={(e) => {
                        if (dragRef.current.moved) {
                          e.preventDefault();
                        }
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "3px",
                        fontSize: "0.72rem",
                        fontWeight: "700",
                        color: "#e9c46a",
                        textDecoration: "none",
                      }}
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>

                {/* Back Face for 3D Spatial Cylinder Realism */}
                <div
                  style={{
                    ...faceBase,
                    transform: "rotateY(180deg)",
                    backgroundColor: "rgba(10, 24, 15, 0.92)",
                    border: "1px solid rgba(116, 198, 157, 0.2)",
                    filter: `brightness(${innerDim / 10})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(82, 183, 136, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(116, 198, 157, 0.5)",
                    }}
                  >
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function RoundCarousel(props) {
  const presetProps = {
    imageWidth: 250,
    imageHeight: 185,
    spacing: 2.4,
    speed: 3.5,
    tilt: -4,
    cornerRadius: 22,
    innerDim: 2,
    perspective: 1600,
    background: "transparent",
    drag: true,
    sensitivity: 4.5,
  };

  return <OriginkitBase_RoundCarousel {...presetProps} {...props} />;
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Activity, 
  Zap, 
  Flame, 
  Calendar, 
  CheckCircle2 
} from "lucide-react";

export const DEFAULT_SERVICES = [
  {
    id: "rmt",
    title: "Massage Therapy (RMT)",
    tag: "Core Discipline",
    subtitle: "Registered Massage Therapy",
    highlight: "Deep tissue, Swedish, prenatal & sports therapy to relieve chronic tension and restore mobility.",
    category: "rmt",
    src: "/images/massage-therapy.png",
    icon: Heart,
    color: "#52b788",
    badge: "ICBC & Extended Health",
    bullets: ["Direct Billing to 20+ Insurers", "45, 60, 75 & 90 Min Options"]
  },
  {
    id: "physio",
    title: "Physiotherapy & Rehab",
    tag: "Clinical Care",
    subtitle: "Evidence-Based Rehabilitation",
    highlight: "Clinical assessment, joint mobilization, and active recovery programs for fast pain relief.",
    category: "physio-kin",
    src: "/images/physiotherapy.jpg",
    icon: Activity,
    color: "#74c69d",
    badge: "Pre-Approved ICBC",
    bullets: ["1-on-1 Dedicated Physiotherapist", "Post-Surgical & Injury Recovery"]
  },
  {
    id: "kinesiology",
    title: "Kinesiology Therapy",
    tag: "Active Rehab",
    subtitle: "Active Exercise Conditioning",
    highlight: "1-on-1 guided exercise rehab empowering you to rebuild strength, endurance, and proper posture.",
    category: "physio-kin",
    src: "/images/clinic-treatment-room.jpg",
    icon: Activity,
    color: "#e9c46a",
    badge: "ICBC Active Recovery",
    bullets: ["BCAK Certified Kinesiologists", "Functional Movement & Whiplash"]
  },
  {
    id: "ims",
    title: "IMS / Dry Needling",
    tag: "Specialized Modality",
    subtitle: "Intramuscular Stimulation",
    highlight: "Precision dry needling targeting tight muscle bands to release chronic nerve and trigger pain.",
    category: "specialized",
    src: "/images/acupuncture-ims.jpg",
    icon: Zap,
    color: "#f4a261",
    badge: "Fast Trigger Point Relief",
    bullets: ["Resets Deep Muscle Spasms", "Accelerated Chronic Pain Relief"]
  },
  {
    id: "shockwave",
    title: "Radial Shockwave",
    tag: "Soundwave Tech",
    subtitle: "Acoustic Wave Therapy",
    highlight: "High-energy acoustic soundwaves stimulating collagen synthesis in stubborn chronic tissues.",
    category: "specialized",
    src: "/images/clinic-room-bed.jpg",
    icon: Zap,
    color: "#52b788",
    badge: "Cellular Regeneration",
    bullets: ["Plantar Fasciitis Relief", "Rapid Tissue Breakdown & Healing"]
  },
  {
    id: "hot-stone",
    title: "Hot Stone Therapy",
    tag: "Thermal Healing",
    subtitle: "Heated Volcanic Basalt",
    highlight: "Warm volcanic basalt stones delivering penetrating thermal relaxation to dissolve muscle tightness.",
    category: "specialized",
    src: "/images/clinic-reception.jpg",
    icon: Flame,
    color: "#e9c46a",
    badge: "Deep Thermal Relaxation",
    bullets: ["Soothes Muscular Tightness", "Profound Stress & Tension Relief"]
  },
  {
    id: "icbc",
    title: "ICBC Injury Recovery",
    tag: "Direct Billing ICBC",
    subtitle: "Motor Vehicle Accident Care",
    highlight: "Complete pre-approved care plans with $0 out-of-pocket fees for RMT, Physio, and Active Rehab.",
    category: "rmt",
    src: "/images/clinic-treatment-room.jpg",
    icon: ShieldCheck,
    color: "#74c69d",
    badge: "100% Pre-Approved Coverage",
    bullets: ["No Doctor Referral Needed", "Direct Billing to ICBC Claims"]
  },
  {
    id: "cupping",
    title: "Cupping Therapy",
    tag: "Restorative Care",
    subtitle: "Myofascial Decompression",
    highlight: "Dynamic vacuum suction decompression that increases local blood circulation and releases fascial tension.",
    category: "specialized",
    src: "/images/11.JPG",
    icon: Sparkles,
    color: "#dfc27d",
    badge: "Decompression & Blood Flow",
    bullets: ["Enhances Blood & Lymph Flow", "Releases Tight Fascial Adhesions"]
  }
];

export function OriginkitBase_RoundCarousel({
  items = DEFAULT_SERVICES,
  imageWidth = 411,
  imageHeight = 460,
  spacing = 1,
  speed = 0.8,
  direction = "right",
  drag = true,
  sensitivity = 5,
  tilt = 4,
  perspective = 400,
  cornerRadius = 47,
  innerDim = 0,
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
    const k = 0.3 * sensitivity;
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

  const JANEAPP_URL = "https://reverewellness.janeapp.com/";

  return (
    <div
      style={{
        ...style,
        width: "100%",
        maxWidth: "1220px",
        height: "735px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "visible",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? (dragRef.current.active ? "grabbing" : "grab") : "default",
        touchAction: "none",
        userSelect: "none",
        margin: "0 auto",
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
            transition: "transform 0.04s linear",
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
                {/* Front Face: High-End Cinematic Editorial Card */}
                <div
                  style={{
                    ...faceBase,
                    background: "linear-gradient(180deg, rgba(13, 40, 24, 0.95) 0%, rgba(9, 26, 16, 0.98) 100%)",
                    border: "2px solid rgba(116, 198, 157, 0.45)",
                    boxShadow: "0 24px 60px -15px rgba(0, 0, 0, 0.75), 0 0 35px rgba(82, 183, 136, 0.28)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "24px 26px 20px 26px",
                    color: "#ffffff",
                  }}
                >
                  {/* Photography Ambience Layer */}
                  {item.src && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "180px",
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.2,
                        zIndex: 0,
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                      }}
                    />
                  )}

                  {/* Header: Tag + Icon */}
                  <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.78rem",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "#e9c46a",
                        background: "rgba(233, 196, 106, 0.16)",
                        padding: "5px 12px",
                        borderRadius: "999px",
                        border: "1.5px solid rgba(233, 196, 106, 0.4)",
                      }}
                    >
                      <Sparkles size={12} color="#e9c46a" />
                      {item.tag}
                    </span>

                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "14px",
                        background: "linear-gradient(135deg, rgba(116, 198, 157, 0.25), rgba(82, 183, 136, 0.15))",
                        border: "1.5px solid rgba(116, 198, 157, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.color || "#74c69d",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.3)",
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                  </div>

                  {/* Middle Content */}
                  <div style={{ position: "relative", zIndex: 1, margin: "10px 0" }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: "700",
                        color: "#74c69d",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "4px",
                      }}
                    >
                      {item.subtitle}
                    </span>

                    <h3
                      style={{
                        fontSize: "1.48rem",
                        fontWeight: "800",
                        color: "#ffffff",
                        margin: "0 0 8px 0",
                        lineHeight: 1.22,
                        letterSpacing: "-0.015em",
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "#d8f3dc",
                        margin: "0 0 10px 0",
                        lineHeight: 1.45,
                        opacity: 0.94,
                      }}
                    >
                      {item.highlight}
                    </p>

                    {/* Feature bullet list */}
                    {item.bullets && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <CheckCircle2 size={14} color="#74c69d" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: "0.82rem", color: "#e8f7ee", fontWeight: "500" }}>
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer & Actions */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      paddingTop: "12px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.14)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          fontSize: "0.78rem",
                          color: "#95d5b2",
                          fontWeight: "700",
                        }}
                      >
                        <ShieldCheck size={14} color="#74c69d" />
                        {item.badge}
                      </span>

                      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: "600" }}>
                        {i + 1} / {count}
                      </span>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <a
                        href={JANEAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (dragRef.current.moved) {
                            e.preventDefault();
                          }
                        }}
                        style={{
                          flex: 1,
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "linear-gradient(135deg, #2d6a4f, #52b788)",
                          color: "#ffffff",
                          fontWeight: "700",
                          fontSize: "0.86rem",
                          textAlign: "center",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          boxShadow: "0 4px 14px rgba(45, 106, 79, 0.45)",
                        }}
                      >
                        <Calendar size={14} />
                        <span>Book Now</span>
                      </a>

                      <Link
                        to={`/services?cat=${item.category || "rmt"}`}
                        onClick={(e) => {
                          if (dragRef.current.moved) {
                            e.preventDefault();
                          }
                        }}
                        style={{
                          padding: "10px 14px",
                          borderRadius: "12px",
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1.5px solid rgba(255, 255, 255, 0.25)",
                          color: "#e9c46a",
                          fontWeight: "700",
                          fontSize: "0.86rem",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                        }}
                      >
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Back Face: Exact Originkit formula with innerDim / 10 brightness */}
                <div
                  style={{
                    ...faceBase,
                    transform: "rotateY(180deg)",
                    backgroundColor: "#000000",
                    border: "1.5px solid rgba(116, 198, 157, 0.15)",
                    filter: `brightness(${innerDim / 10})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "rgba(82, 183, 136, 0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(116, 198, 157, 0.6)",
                    }}
                  >
                    <Sparkles size={24} />
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

const __originkitPresetProps = {
  imageWidth: 411,
  imageHeight: 460,
  spacing: 1,
  speed: 0.8,
  direction: "right",
  drag: true,
  sensitivity: 5,
  tilt: 4,
  perspective: 400,
  cornerRadius: 47,
  innerDim: 0,
  background: "transparent",
};

export default function RoundCarousel(props) {
  return <OriginkitBase_RoundCarousel {...__originkitPresetProps} {...props} />;
}

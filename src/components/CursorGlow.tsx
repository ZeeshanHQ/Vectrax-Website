"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const section = document.getElementById("hero");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    const section = document.getElementById("hero");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    targetRef.current = { x: rect.width / 2, y: rect.height / 2 };
  }, []);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: hover)").matches);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const section = document.getElementById("hero");
    if (!section) return;
    const rect = section.getBoundingClientRect();
    targetRef.current = { x: rect.width / 2, y: rect.height / 2 };
    currentRef.current = { x: rect.width / 2, y: rect.height / 2 };
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDesktop, handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    if (!isDesktop) return;
    let rafId: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.12);
      currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.12);
      setSmoothPosition({ ...currentRef.current });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute will-change-transform transition-opacity duration-500"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          width: 700,
          height: 700,
          marginLeft: -350,
          marginTop: -350,
          background: `radial-gradient(circle, rgba(57, 255, 20, ${isHovering ? 0.12 : 0}) 0%, rgba(34, 197, 94, ${isHovering ? 0.06 : 0}) 35%, transparent 65%)`,
          filter: "blur(50px)",
          opacity: isHovering ? 1 : 0,
        }}
      />
      <div
        className="absolute will-change-transform transition-opacity duration-500"
        style={{
          left: smoothPosition.x,
          top: smoothPosition.y,
          width: 350,
          height: 350,
          marginLeft: -175,
          marginTop: -175,
          background: `radial-gradient(circle, rgba(57, 255, 20, ${isHovering ? 0.18 : 0}) 0%, transparent 55%)`,
          filter: "blur(30px)",
          opacity: isHovering ? 1 : 0,
        }}
      />
    </div>
  );
}

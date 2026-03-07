"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Position trackers
  const mouse = useRef({ x: 0, y: 0 }); // Current mouse position
  const previousMouse = useRef({ x: 0, y: 0 }); // Mouse position from previous frame
  const circle = useRef({ x: 0, y: 0 }); // Current cursor circle position

  // Velocity tracker for stretching
  const currentScale = useRef({ x: 1, y: 1 });
  const currentAngle = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!cursorRef.current) return;

      // 1. Smoothly follow the mouse with delay (interpolation)
      circle.current.x += (mouse.current.x - circle.current.x) * 0.17;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.17;

      // 2. Calculate Velocity based on mouse movement
      const deltaX = mouse.current.x - previousMouse.current.x;
      const deltaY = mouse.current.y - previousMouse.current.y;
      
      // Update previous mouse position for next frame
      previousMouse.current.x = mouse.current.x;
      previousMouse.current.y = mouse.current.y;

      // 3. Scale based on velocity (stretching)
      // We use sqrt(x^2 + y^2) for velocity, then normalize/clamp it
      const velocity = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 150);
      const scaleValue = (velocity / 150) * 0.5; // Scale range 0 to 0.5

      currentScale.current.x = 1 + scaleValue; // Stretch horizontally
      currentScale.current.y = 1 - scaleValue; // Compress vertically

      // 4. Rotation based on movement direction
      // atan2 returns angle in radians, we convert to degrees
      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        currentAngle.current = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      }

      // 5. Apply transformations directly to DOM (Performance)
      // order: translate -> rotate -> scale
      cursorRef.current.style.transform = `
        translate3d(${circle.current.x}px, ${circle.current.y}px, 0)
        rotate(${currentAngle.current}deg)
        scale(${currentScale.current.x}, ${currentScale.current.y})
      `;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "1px solid white",
          borderRadius: "100%",
          pointerEvents: "none",
          left: 0,
          top: 0,
          zIndex: 9999,
          marginTop: "-20px",
          marginLeft: "-20px",
          mixBlendMode: "difference", // Optional: keeps it visible on all backgrounds
        }}
        className="custom-cursor-circle"
      />
    </>
  );
}

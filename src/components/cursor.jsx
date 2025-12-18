import React, { useRef, useEffect } from "react";
import "./cursor.css";


export default function Cursor({ active }) {
  const cursorRef = useRef(null);

  // Target and current positions
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  useEffect(() => {
    const move = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("mousemove", move);

    // Smooth animation frame
    const smoothMove = () => {
      const ease = 0.1; // ✅ control smoothness (0.1 = very smooth, 0.3 = faster)

      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.left = currentX + "px";
        cursorRef.current.style.top = currentY + "px";
      }

      requestAnimationFrame(smoothMove);
    };

    smoothMove();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${active ? "cursor-active" : ""}`}
    ></div>
  );
}

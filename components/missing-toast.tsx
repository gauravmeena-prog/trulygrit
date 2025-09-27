'use client'

import { useEffect, useRef, useState } from "react";

function Toast({ show, onClose }: { show: boolean; onClose: () => void }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#0b1220",
        color: "#e6edf3",
        padding: "12px 16px",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        display: show ? "inline-flex" : "none",
        alignItems: "center",
        gap: 10,
        zIndex: 99999,
        fontFamily:
          'system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.2,
      }}
    >
      <span>😞 Missing you already</span>
      <button
        aria-label="Dismiss"
        onClick={onClose}
        style={{
          background: "transparent",
          border: 0,
          color: "#9fb0c3",
          cursor: "pointer",
          fontSize: 18,
          lineHeight: 1,
          padding: 4,
          marginLeft: 4,
        }}
      >
        &times;
      </button>
    </div>
  );
}

export function MissingToast() {
  const [show, setShow] = useState(false);
  const originalTitle = useRef<string>("");

  useEffect(() => {
    if (typeof document !== "undefined") {
      originalTitle.current = document.title;
    }

    const onVis = () => {
      if (document.hidden) {
        document.title = "😞 Missing you already — Truly Grit";
        setShow(true);
      } else {
        document.title = originalTitle.current || document.title;
        setShow(false);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e as any).relatedTarget === null && e.clientY <= 0) {
        setShow(true);
      }
    };

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <Toast show={show} onClose={() => setShow(false)} />;
}

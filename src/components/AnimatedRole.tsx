
import React, { useState, useEffect, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "System Designer",
  "Python Developer",
];

type AnimationMode = "typing" | "deleting" | "waiting";

const TYPING_SPEED = 65; // ms per character
const DELETING_SPEED = 30;
const WAITING_TIME = 1400;

const AnimatedRole: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [mode, setMode] = useState<AnimationMode>("typing");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const full = roles[currentRole];
    if (mode === "typing") {
      if (displayed.length < full.length) {
        timeoutRef.current = window.setTimeout(
          () => setDisplayed(full.slice(0, displayed.length + 1)),
          TYPING_SPEED
        );
      } else {
        setMode("waiting");
      }
    } else if (mode === "waiting") {
      timeoutRef.current = window.setTimeout(() => setMode("deleting"), WAITING_TIME);
    } else if (mode === "deleting") {
      if (displayed.length > 0) {
        timeoutRef.current = window.setTimeout(
          () => setDisplayed(full.slice(0, displayed.length - 1)),
          DELETING_SPEED
        );
      } else {
        setMode("typing");
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, mode, currentRole]);

  return (
    <span
      className="block text-xl md:text-2xl text-accent min-h-[2.6rem] font-mono transition-opacity duration-300"
      aria-live="polite"
    >
      {displayed}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};

export default AnimatedRole;

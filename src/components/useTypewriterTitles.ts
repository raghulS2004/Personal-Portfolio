
import { useEffect, useState } from "react";

const TITLES = [
  "Full Stack Developer (MERN)",
  "System Designer",
  "Python Developer"
];

const TYPING_SPEED = 60; // ms per letter
const PAUSE_DURATION = 1600; // ms to show the full title before deleting

export function useTypewriterTitles() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = TITLES[index];

    if (!deleting && display.length < fullText.length) {
      timeout = setTimeout(
        () => setDisplay(fullText.slice(0, display.length + 1)),
        TYPING_SPEED
      );
    } else if (!deleting && display.length === fullText.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_DURATION);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(
        () => setDisplay(fullText.slice(0, display.length - 1)),
        TYPING_SPEED / 2
      );
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index]);

  return display;
}


import { useEffect, useState } from "react";

/**
 * Cycles through passed words with a typewriter effect.
 */
export function useTypewriter(words: string[], typingSpeed = 60, holdDelay = 1600) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    const word = words[index];
    setDisplayed("");
    setTyping(true);

    let char = 0;
    interval = setInterval(() => {
      setDisplayed(word.slice(0, char + 1));
      char += 1;
      if (char >= word.length) {
        clearInterval(interval);
        setTyping(false);
        timeout = setTimeout(() => {
          setTyping(true);
          setIndex((i) => (i + 1) % words.length);
        }, holdDelay);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index, words, typingSpeed, holdDelay]);

  // Blinking cursor if typing or at the end:
  return displayed + (typing ? "|" : " ");
}

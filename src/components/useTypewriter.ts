
import { useEffect, useState } from "react";

export function useTypewriter(
  words: string[],
  waitMs: number = 1200,
  typingDelay: number = 70,
  deletingDelay: number = 35
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typeTimer: NodeJS.Timeout;

    if (isDeleting) {
      typeTimer = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, prev.length - 1));
      }, deletingDelay);
    } else if (displayed !== currentWord) {
      typeTimer = setTimeout(() => {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }, typingDelay);
    } else {
      typeTimer = setTimeout(() => setIsDeleting(true), waitMs);
    }

    if (!isDeleting && displayed === currentWord) return () => clearTimeout(typeTimer);

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(typeTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, isDeleting, words, wordIndex]);

  return displayed;
}

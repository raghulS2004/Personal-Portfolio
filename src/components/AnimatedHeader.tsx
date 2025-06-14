
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "System Designer",
  "Python Developer",
];

// Typewriter hook, simple and clean
function useTypewriter(words: string[], delay = 1700, typingSpeed = 40) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    const word = words[index];
    setDisplayed("");
    let i = 0;
    setShowCursor(true);
    interval = setInterval(() => {
      setDisplayed(word.slice(0, i + 1));
      i++;
      if (i === word.length) {
        clearInterval(interval);
        setShowCursor(false);
        timeout = setTimeout(() => {
          setShowCursor(true);
          setIndex((idx) => (idx + 1) % words.length);
        }, delay);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index, words, delay, typingSpeed]);

  return displayed + (showCursor ? "|" : "");
}

const AnimatedHeader = () => {
  const animatedRole = useTypewriter(roles);

  return (
    <header className="w-full bg-background text-foreground py-10 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 px-4">
        {/* Profile Picture */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <div className="rounded-full overflow-hidden border-2 border-accent w-28 h-28 md:w-36 md:h-36 bg-[#181b23]">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-xl">
          {/* Name */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight font-serif">
            Raghul S
          </h1>
          {/* Typewriter Subtitle */}
          <motion.h2
            className="text-lg sm:text-2xl font-semibold text-white/80 min-h-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            aria-live="polite"
          >
            {animatedRole}
          </motion.h2>
          {/* Bio */}
          <p className="mt-2 mb-5 text-sm sm:text-base text-muted-foreground max-w-md">
            Developer focused on building intuitive, scalable systems—passionate about solving problems through clean design and collaboration.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-1 justify-center md:justify-start">
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="GitHub">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="Email">
              <a
                href="mailto:your@email.com"
                aria-label="Email"
              >
                <Mail className="text-muted-foreground hover:text-accent transition-colors" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AnimatedHeader;


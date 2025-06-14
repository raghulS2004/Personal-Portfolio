
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "System Designer",
  "Python Developer",
];

const accent = "from-[#5ee7ff] via-[#6E33FF] to-[#00d7fd]"; // Electric blue/violet gradient

function useTypewriter(words: string[], delay = 1800, typingSpeed = 36) {
  // Cycles through words with typewriter animation
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: any;
    let interval: any;
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
    <section className="w-full relative pt-10 md:pt-16 pb-6 bg-background text-foreground font-sans overflow-hidden">
      <motion.div
        className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16"
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Profile Image - On top on mobile, left on desktop */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="rounded-full overflow-hidden border-4 border-accent shadow-lg w-32 h-32 md:w-40 md:h-40 bg-[#181b23] mx-auto md:mx-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full max-w-2xl">
          {/* Developer Name */}
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold mb-2 tracking-tight bg-gradient-to-r font-serif text-transparent bg-clip-text
             from-cyan-400 via-violet-400 to-[#22d3ee]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Your Name
          </motion.h1>
          {/* Animated Subtitle */}
          <motion.h2
            className="mt-2 mb-4 text-lg sm:text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-violet-500 to-blue-400 text-transparent bg-clip-text min-h-[2.5rem] transition-all"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            aria-live="polite"
          >
            {animatedRole}
          </motion.h2>
          {/* 1-2 line Description */}
          <motion.p
            className="mb-6 text-muted-foreground max-w-lg mx-auto md:mx-0 text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Passionate developer with an eye for clean system design and practical solutions. Experienced in building scalable full-stack applications and collaborating across teams.
          </motion.p>
          {/* Social/contact icons */}
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Button asChild variant="ghost" size="icon" className="hover:bg-accent/70 hover:scale-110 transition-all rounded-full">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="text-cyan-400 hover:text-violet-400" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:bg-accent/70 hover:scale-110 transition-all rounded-full">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-cyan-400 hover:text-violet-400" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="hover:bg-accent/70 hover:scale-110 transition-all rounded-full">
              <a
                href="mailto:your@email.com"
                aria-label="Email"
              >
                <Mail className="text-cyan-400 hover:text-violet-400" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimatedHeader;

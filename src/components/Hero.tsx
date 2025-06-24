import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer (MERN)",
  "System Designer",
  "Python Developer"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full bg-background min-h-[calc(100vh-4rem)] flex items-center justify-center pt-24 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[30rem] sm:h-[40rem] md:h-[50rem] w-[30rem] sm:w-[40rem] md:w-[50rem] bg-accent/10 rounded-full blur-[150px] sm:blur-[200px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 h-[25rem] sm:h-[30rem] md:h-[40rem] w-[25rem] sm:w-[30rem] md:w-[40rem] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] sm:h-[25rem] md:h-[30rem] w-[20rem] sm:w-[25rem] md:w-[30rem] bg-accent/5 rounded-full blur-[75px] sm:blur-[100px] animate-pulse"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6 text-center md:text-left"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium text-sm sm:text-base"
            >
              Hi, I'm
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Raghul S
            </h1>
            <div className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl text-accent h-[2rem] sm:h-[2.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRoleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
            Building scalable, responsive web experiences with clean code and powerful design.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group text-sm sm:text-base">
              <a href="#projects">
                <Briefcase className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-[-5deg]" />
                View Projects
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="group text-sm sm:text-base">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center order-first md:order-last"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-secondary/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <img
                src="https://i.postimg.cc/c6md5f8S/image.png"
                alt="Raghul S"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

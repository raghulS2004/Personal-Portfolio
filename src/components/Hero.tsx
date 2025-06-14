import { motion } from "framer-motion";
import { useTypewriterTitles } from "./useTypewriterTitles";

const Hero = () => {
  const animatedTitle = useTypewriterTitles();

  return (
    <section id="hero" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-serif">
            Hi, I'm Raghul.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-accent min-h-[2.4em]">
            <span className="font-mono transition-colors duration-500">{animatedTitle}</span>
            <span className="animate-pulse">|</span>
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mt-6"
          >
            I'm a passionate software engineer specializing in crafting exceptional digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="#projects"
              className="bg-primary text-primary-foreground font-semibold py-2 px-6 rounded-full hover:bg-primary/80 transition-colors duration-300"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="border border-secondary text-secondary-foreground font-semibold py-2 px-6 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="container mx-auto min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Raghul S
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-accent">
            Full Stack Developer (MERN)
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Building scalable, responsive web experiences with clean code and powerful design.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-80 h-[400px] bg-secondary rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Professional Headshot Here</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

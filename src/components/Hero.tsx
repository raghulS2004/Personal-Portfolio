
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import AnimatedRole from "./AnimatedRole";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative container mx-auto min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[40rem] w-[40rem] bg-accent/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start"
        >
          <div className="w-full flex flex-col items-center md:items-start">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-secondary/50 shadow-xl mb-6">
              <img
                src="https://i.postimg.cc/c6md5f8S/image.png"
                alt="Raghul S"
                className="w-full h-full object-cover object-top"
                draggable={false}
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight text-center md:text-left">
              Raghul S
            </h1>
            <AnimatedRole />
            <p className="mt-6 text-lg text-muted-foreground max-w-lg text-center md:text-left">
              Building scalable, responsive web experiences with clean code and powerful design.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                <a href="#projects">
                  <Briefcase className="mr-2 h-5 w-5 transition-transform group-hover:rotate-[-5deg]" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="group">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          {/* Empty right section for desktop layout, but image is now in the left section for better centering */}
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

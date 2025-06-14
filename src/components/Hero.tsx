
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-12 items-center gap-16">
        <div className="md:col-span-7 space-y-7">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold shadow">
            <span className="block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Hi, I'm
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif tracking-tight text-foreground"
          >
            <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent pr-2">Raghul S</span>
            <span className="text-foreground block font-normal mt-2 md:mt-0">Full Stack MERN Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="max-w-2xl mt-4 text-lg text-gray-600"
          >
            Building scalable and beautiful web apps with React, Node.js, and MongoDB. Passionate about performance, clean code, and UI/UX.
          </motion.p>
          <div className="flex gap-4 flex-wrap mt-5">
            <Button asChild className="rounded-full text-base px-7 py-3">
              <a href="#projects" className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                View Projects
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full text-base px-7 py-3 border border-primary text-primary hover:bg-primary hover:text-white">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact
              </a>
            </Button>
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center mt-6 md:mt-0">
          <div className="bg-gradient-to-br from-primary/20 via-white to-accent/10 p-2 rounded-2xl shadow-card">
            <img
              src="https://i.postimg.cc/c6md5f8S/image.png"
              alt="Raghul S"
              className="h-60 w-60 md:h-72 md:w-72 rounded-[1.2rem] object-cover object-top border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
        className="absolute left-1/2 -translate-x-1/2 bottom-5"
      >
        <a href="#about" aria-label="Scroll to About">
          <ArrowDown className="w-7 h-7 text-gray-400 hover:text-primary transition" />
        </a>
      </motion.div>
    </section>
  );
};
export default Hero;

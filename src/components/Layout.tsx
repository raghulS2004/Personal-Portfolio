import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient orbs with improved positioning */}
        <div className="absolute top-0 right-0 h-[50rem] w-[50rem] bg-accent/10 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 left-0 h-[50rem] w-[50rem] bg-primary/10 rounded-full blur-[200px] animate-pulse" />
        
        {/* Enhanced floating particles */}
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 1,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Enhanced grid overlay with better contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Content wrapper with improved responsive layout */}
      <div className="relative max-w-[2000px] mx-auto">
        {/* Navigation with improved positioning */}
        <Navbar />

        {/* Main content with responsive padding */}
        <main className="relative px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>

        {/* Footer with improved spacing */}
        <Footer />

        {/* Enhanced footer highlight effect */}
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-50" />
      </div>

      {/* Enhanced scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-accent z-50"
        style={{ scaleX }}
      />
    </div>
  );
};

export default Layout; 
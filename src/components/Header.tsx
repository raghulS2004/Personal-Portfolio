
import { motion } from "framer-motion";
import { useTypewriter } from "./useTypewriter";
import { Mail, Github, Linkedin } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Replace this with your actual profile image path in public/
const PROFILE_IMAGE_URL = "/placeholder.svg"; // update if you use a real image

const ROLES = [
  "Full Stack Developer",
  "System Designer",
  "Python Developer",
];

const SOCIALS = [
  {
    icon: <Github size={20} />,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:your@email.com",
    label: "Email",
  },
];

const Header = () => {
  const animatedSubtitle = useTypewriter(ROLES, 1600, 75, 35);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAVIGATION */}
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-serif font-bold text-foreground">
            R S
          </a>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        {/* PROFILE SECTION */}
        <div className="flex flex-col items-center mt-10 mb-6 select-none">
          <img
            src={PROFILE_IMAGE_URL}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border border-muted bg-muted"
            draggable={false}
          />
          <h1 className="mt-5 text-3xl sm:text-4xl font-serif font-bold text-foreground text-center drop-shadow-none">
            Raghul S
          </h1>
          <div className="mt-3 h-8 flex items-center justify-center">
            <span
              className="text-primary text-lg sm:text-xl font-medium min-w-[220px] transition-all duration-400"
              style={{ letterSpacing: ".01em" }}
            >
              {animatedSubtitle}
              <span className="inline-block w-2 h-7 align-middle bg-primary ml-1 animate-pulse" style={{ borderRadius: "2px" }}></span>
            </span>
          </div>
          <p className="mt-2 max-w-xl text-muted-foreground text-center text-base sm:text-lg font-normal">
            Crafting reliable systems and building engaging user experiences with a focus on modern technologies.
          </p>
          <div className="flex items-center space-x-5 mt-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="hover:text-primary transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

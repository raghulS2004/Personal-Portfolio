
import { useTypewriter } from "./useTypewriter";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = ["Full Stack Developer", "System Designer", "Python Developer"];

const socialLinks = [
  {
    href: "https://github.com/raghuls2003",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/raghul-s-0641bb212",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:raghuls2003@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const profileImageUrl = "/profile.jpg"; // Should exist in /public as profile.jpg

const Header = () => {
  const animatedSubtitle = useTypewriter(roles);

  return (
    <header className="w-full pt-10 md:pt-16 pb-6 bg-background text-foreground font-sans overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-16">
        {/* Profile image */}
        <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0 flex flex-col items-center">
          <div className="rounded-full overflow-hidden border-4 border-accent w-32 h-32 md:w-40 md:h-40 bg-secondary">
            <img
              src={profileImageUrl}
              alt="Raghul S"
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col items-center md:items-start w-full max-w-xl">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tight font-serif text-white text-center md:text-left">
            Raghul S
          </h1>
          {/* Animated subtitle */}
          <h2
            aria-live="polite"
            className="mt-2 mb-4 text-xl sm:text-2xl font-semibold text-accent min-h-[2.5rem] transition-all text-center md:text-left"
          >
            {animatedSubtitle}
          </h2>
          {/* Bio */}
          <p className="mb-5 text-muted-foreground text-base text-center md:text-left max-w-lg">
            Building robust, scalable, and modern web experiences with clean code and elegant design.
          </p>
          {/* Social icons */}
          <div className="flex gap-5 mt-2 justify-center md:justify-start">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                key={label}
                className="p-2 rounded-full hover:bg-accent/20 transition-colors"
              >
                <Icon className="w-6 h-6 text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

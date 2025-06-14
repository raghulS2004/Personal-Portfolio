
import { motion } from "framer-motion";
const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-navbar">
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="#"
          className="text-2xl font-serif font-extrabold text-primary tracking-wide"
        >
          R S
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 font-medium text-base px-3 py-2 rounded-full transition duration-150 hover:bg-primary hover:text-white hover:shadow-md"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Header;

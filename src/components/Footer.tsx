import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Link as LinkIcon, Phone, Heart } from 'lucide-react';

const socialLinks = [
    { icon: <Mail />, href: "mailto:raghul.s0004@gmail.com", name: "Email" },
    { icon: <Phone />, href: "tel:+919840408003", name: "Phone" },
    { icon: <Linkedin />, href: "https://linkedin.com/in/profile-raghul", name: "LinkedIn" },
    { icon: <Github />, href: "https://github.com/raghuls2004", name: "GitHub" },
    { icon: <Code />, href: "https://leetcode.com/u/raghuls2004", name: "LeetCode" },
];

const Footer = () => {
  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-['Leckerli_One'] text-blue-500">
              R
            </span>
            <span className="text-muted-foreground text-sm">
              © 2025 Raghul S. All rights reserved.
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Made with Love */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            Made with by Raghul
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

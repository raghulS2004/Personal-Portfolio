import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Code, Link as LinkIcon, Phone, Send, ArrowRight } from 'lucide-react';
import { useState } from "react";

const socialLinks = [
    { icon: <Mail />, href: "mailto:raghul.s0004@gmail.com", name: "Email" },
    { icon: <Phone />, href: "tel:+919840408003", name: "Phone" },
    { icon: <Linkedin />, href: "https://linkedin.com/in/profile-raghul", name: "LinkedIn" },
    { icon: <Github />, href: "https://github.com/raghuls2004", name: "GitHub" },
    { icon: <Code />, href: "https://leetcode.com/u/raghuls2004", name: "LeetCode" },
    { icon: <LinkIcon />, href: "https://raghuls.netlify.app", name: "Website" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section id="contact" className="w-full bg-background py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ opacity }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ scale }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <motion.div 
            className="h-1 w-24 bg-accent rounded-full mx-auto mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-center text-muted-foreground text-xl max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to reach out.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="relative group">
                <Input 
                  placeholder="Name" 
                  className="h-12 bg-background/50 border-border/50 focus:border-accent transition-all duration-300 group-hover:shadow-lg"
                />
                <motion.div
                  className="absolute inset-0 rounded-md bg-accent/5 -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div variants={itemVariants} className="relative group">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="h-12 bg-background/50 border-border/50 focus:border-accent transition-all duration-300 group-hover:shadow-lg"
                />
                <motion.div
                  className="absolute inset-0 rounded-md bg-accent/5 -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div variants={itemVariants} className="relative group">
                <Textarea 
                  placeholder="Message" 
                  className="min-h-[150px] bg-background/50 border-border/50 focus:border-accent transition-all duration-300 resize-none group-hover:shadow-lg"
                />
                <motion.div
                  className="absolute inset-0 rounded-md bg-accent/5 -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground relative group overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Connect With Me</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group relative p-4 text-muted-foreground hover:text-accent transition-colors bg-background/50 rounded-xl border border-border/50 hover:border-accent/50"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-accent/5 rounded-xl -z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="flex items-center gap-3">
                      <span className="text-accent">{link.icon}</span>
                      <span className="font-medium">{link.name}</span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Contact;

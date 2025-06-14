
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Code, Link as LinkIcon, Phone } from 'lucide-react';

const socialLinks = [
    { icon: <Mail />, href: "mailto:raghul.s0004@gmail.com", name: "Email" },
    { icon: <Phone />, href: "tel:+919840408003", name: "Phone" },
    { icon: <Linkedin />, href: "https://linkedin.com/in/profile-raghul", name: "LinkedIn" },
    { icon: <Github />, href: "https://github.com/raghuls2004", name: "GitHub" },
    { icon: <Code />, href: "https://leetcode.com/u/raghuls2004", name: "LeetCode" },
    { icon: <LinkIcon />, href: "https://raghuls.netlify.app", name: "Website" },
];

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-serif font-bold text-center">Get In Touch</h2>
      <p className="mt-4 text-center text-muted-foreground">
        Have a project in mind or just want to say hi? Feel free to reach out.
      </p>
      <div className="mt-12 max-w-lg mx-auto">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>
      </div>
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">Or connect with me on social media:</p>
        <div className="flex justify-center flex-wrap gap-6">
            {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    {link.icon}
                </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

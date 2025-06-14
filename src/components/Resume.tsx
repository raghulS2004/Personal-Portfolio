
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="bg-secondary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center">My Journey</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent"></div>
                <p className="text-sm text-muted-foreground">May 2024 – June 2024</p>
                <h4 className="text-xl font-semibold">Web Developer Intern</h4>
                <p className="text-muted-foreground">Arjun Vision Tech Solutions (Remote)</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent"></div>
                <p className="text-sm text-muted-foreground">2022 – 2026</p>
                <h4 className="text-xl font-semibold">B.E. Computer Science Engineering</h4>
                <p className="text-muted-foreground">Saveetha Engineering College (GPA: 8.0)</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent"></div>
                <p className="text-sm text-muted-foreground">2022</p>
                <h4 className="text-xl font-semibold">HSC (12th Grade)</h4>
                <p className="text-muted-foreground">Vivekananda Vidyalaya, CBSE (89%)</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-accent"></div>
                <p className="text-sm text-muted-foreground">2020</p>
                <h4 className="text-xl font-semibold">SSLC (10th Grade)</h4>
                <p className="text-muted-foreground">Vivekananda Vidyalaya, CBSE (79%)</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg">
            <a href="/Raghul_S_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;

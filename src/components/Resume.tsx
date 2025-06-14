import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="bg-background py-20">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-center text-foreground">My Journey</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Experience</h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-sm text-gray-500">May 2024 – June 2024</p>
                <h4 className="text-xl font-semibold">Web Developer Intern</h4>
                <p className="text-gray-500">Arjun Vision Tech Solutions (Remote)</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Education</h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-sm text-gray-500">2022 – 2026</p>
                <h4 className="text-xl font-semibold">B.E. Computer Science Engineering</h4>
                <p className="text-gray-500">Saveetha Engineering College (GPA: 8.0)</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-sm text-gray-500">2022</p>
                <h4 className="text-xl font-semibold">HSC (12th Grade)</h4>
                <p className="text-gray-500">Vivekananda Vidyalaya, CBSE (89%)</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary"></div>
                <p className="text-sm text-gray-500">2020</p>
                <h4 className="text-xl font-semibold">SSLC (10th Grade)</h4>
                <p className="text-gray-500">Vivekananda Vidyalaya, CBSE (79%)</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="rounded-full px-8 py-3">
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

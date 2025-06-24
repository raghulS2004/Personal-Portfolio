import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, Cloud, Database, Code2, BookOpen, Award, Globe, Monitor } from "lucide-react";
import { FaReact, FaAws, FaPython } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const experience = [
  {
    title: "WEB DEVELOPER INTERN",
    org: "Arjun Vision Tech Solutions – Remote",
    description: "Built a full-stack blog system using React, Node.js, Express, and MongoDB. Implemented authentication and CRUD features.",
    year: "May 2024 – June 2024",
  },
];

const education = [
  {
    title: "B.E. Computer Science Engineering",
    org: "Saveetha Engineering College",
    description: "GPA: 8.0 — Coursework in algorithms, data structures, and full-stack development. Participated in software development clubs.",
    year: "2022 – 2026",
  },
  {
    title: "HSC (12th Grade)",
    org: "Vivekananda Vidyalaya, CBSE",
    description: "Achieved 89%. Excelled in Mathematics and Physics, active in science exhibitions.",
    year: "2022",
  },
  {
    title: "SSLC (10th Grade)",
    org: "Vivekananda Vidyalaya, CBSE",
    description: "Score: 79%. Completed secondary education with emphasis on foundational sciences.",
    year: "2020",
  },
];

const certifications = [
  "AWS Academy Cloud Security Foundations",
  "MernStack – Udemy",
  "Introduction to IoT – NPTEL",
  "MongoDB Basic & Document Mode – MongoDB",
  "Python & C Programming – Udemy",
  "Full Stack Internship – Arjun Vision Tech Solutions, Edureka",
  "React Advanced – Udemy",
  "Responsive Web Design – freeCodeCamp"
];

const certificationIcons = [
  <Cloud className="text-accent w-6 h-6" />, // AWS
  <FaReact className="text-accent w-6 h-6" />, // MernStack
  <BookOpen className="text-accent w-6 h-6" />, // IoT
  <Database className="text-accent w-6 h-6" />, // MongoDB
  <FaPython className="text-accent w-6 h-6" />, // Python & C
  <Award className="text-accent w-6 h-6" />, // Internship
  <FaReact className="text-accent w-6 h-6" />, // React Advanced
  <Monitor className="text-accent w-6 h-6" />, // Responsive Web Design
];

// Compatible Framer Motion variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, type: "spring" } },
};

const TimelineSection = ({
  items,
  icon,
  sectionTitle,
}: {
  items: typeof experience;
  icon: JSX.Element;
  sectionTitle: string;
}) => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <span className="rounded-full bg-accent/20 p-2 mr-3 text-accent">
          {icon}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold font-sans text-accent">
          {sectionTitle}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: idx * 0.08 }}
            className="group"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                  className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {icon}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{item.org}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <span className="text-xs text-accent font-semibold tracking-wide bg-[#21223a] rounded px-3 py-1 mt-2 inline-block">
                    {item.year}
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-12 mb-0">
    <h2 className="text-3xl font-serif font-bold text-center mb-4 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">{children}</h2>
  </div>
);

const Resume = () => {
  return (
    <section id="resume" className="relative w-full bg-background py-24 overflow-hidden">
      {/* Modern blurred orb background, matching Hero */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 right-0 h-[30rem] sm:h-[40rem] md:h-[50rem] w-[30rem] sm:w-[40rem] md:w-[50rem] bg-accent/10 rounded-full blur-[150px] sm:blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 left-0 h-[25rem] sm:h-[30rem] md:h-[40rem] w-[25rem] sm:w-[30rem] md:w-[40rem] bg-primary/5 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[20rem] sm:h-[25rem] md:h-[30rem] w-[20rem] sm:w-[25rem] md:w-[30rem] bg-accent/5 rounded-full blur-[75px] sm:blur-[100px] animate-pulse" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent text-center mb-0">
          My Journey
        </h2>
          <div className="h-1 w-24 bg-accent rounded-full mx-auto mt-6 mb-14" />
        <div className="flex flex-col gap-20 max-w-3xl mx-auto">
            {/* Education */}
            <SectionHeading>Education</SectionHeading>
            <div className="grid grid-cols-1 gap-6 mt-0">
              {education.map((item, idx) => (
                <motion.div
                  key={item.title + idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  transition={{ delay: idx * 0.08 }}
                  className="group"
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <GraduationCap className="h-7 w-7 text-accent" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{item.org}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <span className="text-xs text-accent font-semibold tracking-wide bg-[#21223a] rounded px-3 py-1 mt-2 inline-block">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            {/* Experience */}
            <SectionHeading>Experience</SectionHeading>
            <div className="grid grid-cols-1 gap-6 mt-0">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.title + idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  transition={{ delay: idx * 0.08 }}
                  className="group"
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                    <div className="flex flex-col items-center text-center gap-4">
                      <motion.div
                        className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <Briefcase className="h-7 w-7 text-accent" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{item.org}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <span className="text-xs text-accent font-semibold tracking-wide bg-[#21223a] rounded px-3 py-1 mt-2 inline-block">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            {/* Certifications */}
            <SectionHeading>Certifications</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mt-0">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  transition={{ delay: idx * 0.08 }}
                  className="group flex justify-center"
                >
                  <Card className="w-96 h-40 flex flex-col justify-center items-center p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                    <div className="flex flex-col items-center text-center gap-4 w-full">
                      <motion.div
                        className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        {certificationIcons[idx]}
                      </motion.div>
                      <div className="flex-1 flex items-center justify-center w-full">
                        <h4 className="font-semibold text-lg mb-2 w-full break-words">{cert}</h4>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Code2, Briefcase, BookOpen, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Problem Solver", icon: <Code2 className="w-5 h-5" />, description: "Analytical thinking and efficient solutions" },
  { name: "Backend Enthusiast", icon: <Briefcase className="w-5 h-5" />, description: "Robust API design and database optimization" },
  { name: "MERN Developer", icon: <Code2 className="w-5 h-5" />, description: "Full-stack development with modern technologies" },
  { name: "System Designer", icon: <Code2 className="w-5 h-5" />, description: "Architecting scalable and efficient systems" }
];

const timeline = [
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6" />,
    content: "B.E. Computer Science Engineering",
    year: "2020 - 2024",
    details: "Focus on software development and system design"
  },
  {
    title: "Development",
    icon: <Code2 className="w-6 h-6" />,
    content: "Full Stack Development (MERN)",
    year: "2022 - Present",
    details: "Building scalable web applications and APIs"
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section id="about" className="w-full bg-background pt-0 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div className="absolute inset-0 -z-10" style={{ opacity }}>
          <div className="absolute top-0 right-0 h-[50rem] w-[50rem] bg-accent/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 left-0 h-[50rem] w-[50rem] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ scale }}
          className="w-full px-0"
        >
          {/* Title Section with Extra Space Below */}
          <motion.div 
            className="text-center mb-24 mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              About Me
            </h2>
            <motion.div 
              className="h-1 w-24 bg-accent rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded-lg -z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Full Stack Developer (MERN) and B.E. CSE student with a passion for building scalable web apps. Experienced in React, Node.js, MongoDB, and more, with a solid grasp of system design and clean coding practices.
                </p>
                <motion.button
                  className="mt-6 flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Learn more about my journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Card>
            </motion.div>

            {/* Timeline Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                    <div className="flex items-start gap-6">
                      <motion.div 
                        className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground">{item.content}</p>
                        <p className="text-sm text-muted-foreground/80">{item.details}</p>
                        <span className="text-sm text-accent font-medium">{item.year}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24"
          >
            <h3 className="text-3xl font-serif font-bold text-center mb-12 bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Core Strengths
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 flex flex-col items-center text-center rounded-xl">
                    <motion.div
                      className="p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                      whileHover={{ rotate: 5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="w-full mt-2">
                      <h4 className="font-semibold text-lg mb-2 break-words">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

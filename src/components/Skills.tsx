
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiC,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { Code, Wrench } from "lucide-react";

const techStackSections = [
  {
    label: "Programming Languages",
    icon: <Code className="w-7 h-7 text-primary" />,
    rows: [
      [
        { name: "Python", icon: <FaPython className="h-9 w-9 text-[#3776ab]" /> },
        { name: "JavaScript", icon: <FaJsSquare className="h-9 w-9 text-[#f0db4f]" /> },
        { name: "Java", icon: <FaJava className="h-9 w-9 text-[#f89820]" /> },
        { name: "C", icon: <SiC className="h-9 w-9 text-[#A8B9CC]" /> },
      ],
    ],
  },
  {
    label: "Web Development",
    icon: <Code className="w-7 h-7 text-primary" />,
    rows: [
      [
        { name: "React.js", icon: <FaJsSquare className="h-9 w-9 text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-9 w-9 text-[#3c873a]" /> },
        { name: "Express.js", icon: <SiExpress className="h-9 w-9 text-[#000]" /> },
        { name: "HTML", icon: <FaHtml5 className="h-9 w-9 text-[#e34c26]" /> },
      ],
      [
        { name: "CSS", icon: <FaCss3Alt className="h-9 w-9 text-[#264de4]" /> },
        { name: "RESTful APIs", icon: <Wrench className="h-9 w-9 text-primary" /> },
      ],
    ],
  },
  {
    label: "Databases",
    icon: <SiMysql className="w-7 h-7 text-primary" />,
    rows: [
      [
        { name: "MongoDB", icon: <SiMongodb className="h-9 w-9 text-[#4db33d]" /> },
        { name: "MySQL", icon: <SiMysql className="h-9 w-9 text-[#00758f]" /> },
      ],
    ],
  },
  {
    label: "Tools",
    icon: <Wrench className="w-7 h-7 text-primary" />,
    rows: [
      [
        { name: "Git", icon: <FaGithub className="h-9 w-9 text-[#ea4335]" /> },
        { name: "GitHub", icon: <FaGithub className="h-9 w-9 text-[#222]" /> },
        { name: "Postman", icon: <SiPostman className="h-9 w-9 text-[#FF6C37]" /> },
      ],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif mb-2 text-foreground">Tech Stack</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {techStackSections.map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span>{section.icon}</span>
                  <h3 className="text-xl font-semibold font-sans tracking-wide text-primary">
                    {section.label}
                  </h3>
                </div>
                <div className="flex flex-col gap-6">
                  {section.rows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex flex-wrap gap-6"
                    >
                      {row.map((skill, idx) => (
                        <Card
                          key={skill.name}
                          className="flex flex-col items-center gap-2 bg-white border border-border rounded-2xl shadow-card py-7 px-5 transition-transform duration-200 transform hover:scale-105"
                        >
                          <div className="flex items-center justify-center mb-2 rounded-full bg-primary/10 h-14 w-14">
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-foreground text-[1.06rem]">{skill.name}</span>
                        </Card>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;


import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import { SiC, SiExpress, SiMongodb, SiMysql, SiPostman, SiVercel } from "react-icons/si";
import { Code, Github, Wrench } from "lucide-react";

// Tech stack data matching resume (excluding soft skills)
const techStackSections = [
  {
    label: "Programming Languages",
    icon: <Code className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "Python", icon: <FaPython className="h-10 w-10 text-[#3776ab]" /> },
        { name: "JavaScript", icon: <FaJsSquare className="h-10 w-10 text-[#f0db4f]" /> },
        { name: "Java", icon: <FaJava className="h-10 w-10 text-[#f89820]" /> },
        { name: "C", icon: <SiC className="h-10 w-10 text-[#A8B9CC]" /> },
      ],
    ],
  },
  {
    label: "Web Development",
    icon: <Code className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "React.js", icon: <FaJsSquare className="h-10 w-10 text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-10 w-10 text-[#3c873a]" /> },
        { name: "Express.js", icon: <SiExpress className="h-10 w-10 text-[#FFFFFF]" /> },
        { name: "HTML", icon: <FaHtml5 className="h-10 w-10 text-[#e34c26]" /> },
      ],
      [
        { name: "CSS", icon: <FaCss3Alt className="h-10 w-10 text-[#264de4]" /> },
        { name: "RESTful APIs", icon: <Wrench className="h-10 w-10 text-[#a78bfa] bg-[#272133] rounded-xl p-1" /> },
      ],
    ],
  },
  {
    label: "Databases",
    icon: <SiMysql className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-[#4db33d]" /> },
        { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#00758f]" /> },
      ],
    ],
  },
  {
    label: "Tools",
    icon: <Wrench className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "Git", icon: <Github className="h-10 w-10 text-[#ea4335]" /> },
        { name: "GitHub", icon: <FaGithub className="h-10 w-10 text-[#fff]" /> },
        { name: "Postman", icon: <SiPostman className="h-10 w-10 text-[#FF6C37]" /> },
        { name: "VS Code", icon: <img src="https://cdn.simpleicons.org/visualstudiocode/007ACC/fff" alt="VSCode" className="h-10 w-10" /> },
      ],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-serif font-bold text-center">Tech Stack</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12 max-w-2xl mx-auto">
            A categorized overview of my technical skillset.
          </p>
        </motion.div>
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-col gap-16">
            {techStackSections.map((section) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span>{section.icon}</span>
                  <h3 className="text-3xl font-bold font-sans">{section.label}</h3>
                </div>
                <div className="flex flex-col gap-7">
                  {section.rows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6`}
                    >
                      {row.map((skill, idx) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <Card
                              className="flex flex-col items-center justify-center bg-card border-none shadow-lg rounded-2xl py-7 transition-all hover:scale-[1.04] min-h-[110px]"
                              style={{
                                minWidth: "120px"
                              }}
                            >
                              <div>{skill.icon}</div>
                              <span className="mt-3 text-md text-foreground font-medium font-sans">{skill.name}</span>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                      {/* Fill in empty columns for proper alignment */}
                      {row.length < 4 &&
                        Array.from({ length: 4 - row.length }).map((_, i) => (
                          <div key={`empty-${i}`} className="hidden md:block"></div>
                        ))
                      }
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;



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
import {
  SiC,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
} from "react-icons/si";
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
    <section id="skills" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Accent Stripe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-[2.6rem] sm:text-4xl md:text-5xl font-bold font-serif tracking-tight relative z-10">
              Tech Stack
              <span className="block h-1 w-16 mx-auto bg-accent rounded mt-4 mb-1" />
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              A categorized overview of my technical skillset.
            </p>
          </div>
        </motion.div>
        {/* Tech Stack Categories */}
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-col gap-16">
            {techStackSections.map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-7">
                  <span>{section.icon}</span>
                  <h3 className="text-2xl font-bold font-sans tracking-wide text-accent">
                    {section.label}
                  </h3>
                </div>
                <div className="flex flex-col gap-7">
                  {section.rows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    >
                      {row.map((skill, idx) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <Card
                              className="flex flex-col items-center justify-center bg-card border border-border shadow-lg rounded-xl py-8 px-1 relative group transition-all hover:scale-[1.045] hover:border-accent hover:shadow-xl hover:z-20 overflow-hidden"
                              style={{ minWidth: "120px" }}
                            >
                              {/* Top accent bar */}
                              <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70 rounded-t-xl transition-all group-hover:opacity-100" />
                              <div className="z-10">{skill.icon}</div>
                              <span className="mt-4 text-md text-foreground font-semibold font-sans">
                                {skill.name}
                              </span>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                      {/* Fill empty columns for alignment */}
                      {row.length < 4 &&
                        Array.from({ length: 4 - row.length }).map((_, i) => (
                          <div key={`empty-${i}`} className="hidden md:block" />
                        ))}
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

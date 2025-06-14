
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaJava,
  FaPython, FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiVercel } from "react-icons/si";
import { Code } from "lucide-react";

// All skills mapped out according to your resume
const skillSections = [
  {
    label: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython className="h-8 w-8 text-[#3776ab]" /> },
      { name: "JavaScript", icon: <FaJsSquare className="h-8 w-8 text-[#f0db4f]" /> },
      { name: "Java", icon: <FaJava className="h-8 w-8 text-[#f89820]" /> },
      { name: "C", icon: <Code className="h-8 w-8 text-foreground" /> },
    ],
  },
  {
    label: "Web Development",
    skills: [
      { name: "React.js", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" /> },
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-[#539e43]" /> },
      { name: "Express.js", icon: <SiExpress className="h-8 w-8 text-[#fff]" /> },
      { name: "HTML", icon: <FaHtml5 className="h-8 w-8 text-[#e34c26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="h-8 w-8 text-[#264de4]" /> },
      { name: "RESTful APIs", icon: <Code className="h-8 w-8 text-foreground" /> },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-[#4db33d]" /> },
      { name: "MySQL", icon: <SiMysql className="h-8 w-8 text-[#00758f]" /> },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: <FaGithub className="h-8 w-8 text-[#fff]" /> },
      { name: "GitHub", icon: <FaGithub className="h-8 w-8 text-[#fff]" /> },
      { name: "Postman", icon: <Code className="h-8 w-8 text-foreground" /> },
      { name: "VS Code", icon: <Code className="h-8 w-8 text-[#007ACC]" /> },
    ],
  },
  {
    label: "Other Skills",
    skills: [
      { name: "OOP", icon: <Code className="h-8 w-8 text-foreground" /> },
      { name: "Debugging", icon: <Code className="h-8 w-8 text-foreground" /> },
      { name: "Problem Solving", icon: <Code className="h-8 w-8 text-foreground" /> },
      { name: "Deployment", icon: <Code className="h-8 w-8 text-foreground" /> },
    ],
  },
  {
    label: "Soft Skills",
    skills: [
      { name: "Creativity", icon: null },
      { name: "Critical Thinking", icon: null },
      { name: "Leadership", icon: null },
      { name: "Collaboration", icon: null },
      { name: "Time Management", icon: null },
    ],
  },
];

// Helper: Split skills into rows of up to 4 per row for consistency
function chunkArray(array, size) {
  const results = [];
  for (let i = 0; i < array.length; i += size) {
    results.push(array.slice(i, i + size));
  }
  return results;
}

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
          <h2 className="text-4xl font-serif font-bold text-center tracking-wide">Skills</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12 max-w-2xl mx-auto">
            Here are the core technical and professional skills I bring to the table.
          </p>
        </motion.div>
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-col gap-16">
            {skillSections.map((section) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent">{section.label}</h3>
                </div>
                {/* Section Skills as Grid */}
                <div className="flex flex-col gap-6">
                  {chunkArray(section.skills, 4).map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex flex-row gap-7 md:gap-9 justify-center items-stretch"
                    >
                      {row.map((skill, idx) =>
                        skill ? (
                          <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                              <Card
                                className="flex flex-col items-center justify-center bg-card border-none rounded-2xl py-7 w-[110px] h-[120px] shadow-md transition-all hover:scale-[1.06]"
                              >
                                <div className="mb-2">{skill.icon}</div>
                                <span className="mt-2 text-[1rem] text-foreground font-medium font-sans text-center">
                                  {skill.name}
                                </span>
                              </Card>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        ) : (
                          <div
                            key={`empty-${idx}`}
                            className="w-[110px] h-[120px] opacity-0 pointer-events-none select-none"
                            aria-hidden
                          />
                        )
                      )}
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

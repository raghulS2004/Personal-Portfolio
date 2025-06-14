import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  FaPython, FaJsSquare, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaGithub, FaDatabase
} from "react-icons/fa";
import {
  SiC, SiExpress, SiMongodb, SiMysql, SiPostman
} from "react-icons/si";
import { Code2, Braces, Server, Wrench } from "lucide-react";

// Define skill groups as per your resume
const skillGroups = [
  {
    label: "Programming Languages",
    icon: <Braces className="w-7 h-7 text-accent" />,
    skills: [
      { name: "Python", icon: <FaPython className="h-8 w-8 text-[#3776AB]" /> },
      { name: "JavaScript", icon: <FaJsSquare className="h-8 w-8 text-[#F7DF1E]" /> },
      { name: "Java", icon: <FaJava className="h-8 w-8 text-[#007396]" /> },
      { name: "C", icon: <SiC className="h-8 w-8 text-[#A8B9CC]" /> },
    ]
  },
  {
    label: "Web Development",
    icon: <Code2 className="w-7 h-7 text-accent" />,
    skills: [
      { name: "React.js", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" /> },
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="h-8 w-8 text-foreground" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" /> },
      { name: "RESTful APIs", icon: <Code2 className="h-8 w-8 text-[#50fa7b]" /> },
    ]
  },
  {
    label: "Databases",
    icon: <Server className="w-7 h-7 text-accent" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="h-8 w-8 text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="h-8 w-8 text-[#4479A1]" /> },
    ]
  },
  {
    label: "Tools",
    icon: <Wrench className="w-7 h-7 text-accent" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="h-8 w-8 text-foreground" /> },
      { name: "Postman", icon: <SiPostman className="h-8 w-8 text-[#FF6C37]" /> },
      { name: "VS Code", icon: <FaGithub className="h-8 w-8 text-[#007ACC]" /> },
    ]
  },
  {
    label: "Other Skills",
    icon: <Code2 className="w-7 h-7 text-accent" />,
    skills: [
      { name: "OOP", icon: <Braces className="h-8 w-8 text-accent" /> },
      { name: "Debugging", icon: <Code2 className="h-8 w-8 text-primary" /> },
      { name: "Problem Solving", icon: <Code2 className="h-8 w-8 text-primary" /> },
      { name: "Deployment", icon: <Server className="h-8 w-8 text-accent" /> },
    ]
  }
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
          <h2 className="text-4xl font-serif font-bold text-center">Skills</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12 max-w-2xl mx-auto">
            A categorized overview of my technical and professional skillset.
          </p>
        </motion.div>
        <TooltipProvider delayDuration={100}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06 }}
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.label}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="bg-card/80 border-none shadow-xl rounded-2xl transition-transform hover:scale-105">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <span>{group.icon}</span>
                    <CardTitle className="text-xl font-bold">{group.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                      {group.skills.map((skill) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center group cursor-pointer">
                              <div className="bg-background rounded-lg p-3 mb-1 shadow-md transition-all duration-300 hover:scale-105">
                                {skill.icon}
                              </div>
                              <span className="text-xs text-foreground mt-1">{skill.name}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;

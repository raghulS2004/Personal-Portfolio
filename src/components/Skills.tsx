
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaPython, FaJsSquare, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiC, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import { Brain, Braces, Code2 } from "lucide-react";

const skillGroups = [
  {
    label: "Full Stack",
    icon: <Code2 className="w-7 h-7 text-accent" />,
    skills: [
      { name: 'Python', icon: <FaPython className="h-8 w-8 text-[#3776AB]" /> },
      { name: 'JavaScript', icon: <FaJsSquare className="h-8 w-8 text-[#F7DF1E]" /> },
      { name: 'React.js', icon: <FaReact className="h-8 w-8 text-[#61DAFB]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="h-8 w-8 text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="h-8 w-8 text-foreground" /> },
      { name: 'MongoDB', icon: <SiMongodb className="h-8 w-8 text-[#47A248]" /> },
      { name: 'MySQL', icon: <SiMysql className="h-8 w-8 text-[#4479A1]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" /> },
      { name: 'HTML5', icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" /> },
      { name: 'Git', icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="h-8 w-8 text-foreground" /> },
      { name: 'Postman', icon: <SiPostman className="h-8 w-8 text-[#FF6C37]" /> },
    ],
  },
  {
    label: "AI / ML",
    icon: <Brain className="w-7 h-7 text-accent" />,
    skills: [
      { name: 'Python', icon: <FaPython className="h-8 w-8 text-[#3776AB]" /> },
      { name: 'C', icon: <SiC className="h-8 w-8 text-[#A8B9CC]" /> },
      { name: 'Java', icon: <FaJava className="h-8 w-8 text-[#007396]" /> },
      // Add any AI-specific tools here!
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
          <h2 className="text-4xl font-serif font-bold text-center">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12 max-w-2xl mx-auto">
            A showcase of the primary tools and technologies I utilize in my projects.
          </p>
        </motion.div>
        <TooltipProvider delayDuration={100}>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Card className="bg-card/80 border-none shadow-xl rounded-2xl transition-transform hover:scale-105">
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <span>{group.icon}</span>
                    <CardTitle className="text-xl font-bold">{group.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-5 pt-2">
                      {group.skills.map((skill) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center group cursor-pointer">
                              <div className="bg-background rounded-lg p-3 mb-1 shadow-md transition-all duration-300 hover-scale">
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

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaPython, FaJsSquare, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiC, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';

const skillsList = [
    { name: 'Python', icon: <FaPython className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#3776AB]" },
    { name: 'JavaScript', icon: <FaJsSquare className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#F7DF1E]" },
    { name: 'Java', icon: <FaJava className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#007396]" },
    { name: 'C', icon: <SiC className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#A8B9CC]" },
    { name: 'React.js', icon: <FaReact className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#61DAFB]" },
    { name: 'HTML5', icon: <FaHtml5 className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#E34F26]" },
    { name: 'CSS3', icon: <FaCss3Alt className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#1572B6]" },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#06B6D4]" },
    { name: 'Node.js', icon: <FaNodeJs className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#339933]" },
    { name: 'Express.js', icon: <SiExpress className="h-10 w-10 transition-colors" />, color: "group-hover:text-foreground" },
    { name: 'MongoDB', icon: <SiMongodb className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#47A248]" },
    { name: 'MySQL', icon: <SiMysql className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#4479A1]" },
    { name: 'Git', icon: <FaGitAlt className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#F05032]" },
    { name: 'GitHub', icon: <FaGithub className="h-10 w-10 transition-colors" />, color: "group-hover:text-foreground" },
    { name: 'Postman', icon: <SiPostman className="h-10 w-10 transition-colors" />, color: "group-hover:text-[#FF6C37]" },
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
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {skillsList.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={`group flex justify-center items-center p-4 bg-background rounded-lg text-muted-foreground aspect-square transition-all duration-300 ease-in-out hover:bg-background/80 hover:scale-110 hover:shadow-lg hover:shadow-accent/10 ${skill.color}`}>
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;

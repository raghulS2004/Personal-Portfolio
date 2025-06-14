
import { motion } from "framer-motion";
import {
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiPostman,
  SiVisualstudiocode, SiJava, SiPython, SiC, SiMysql
} from 'react-icons/si';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const skills = [
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: SiJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'C', icon: SiC },
  { name: 'React.js', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman },
  { name: 'VS Code', icon: SiVisualstudiocode },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">My Tech Stack</h2>
        <TooltipProvider>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="group bg-background p-6 rounded-lg flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-card hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                      >
                        <Icon className="w-12 h-12 text-muted-foreground transition-colors duration-300 group-hover:text-accent" />
                        <p className="font-semibold text-muted-foreground text-center transition-colors duration-300 group-hover:text-foreground">{skill.name}</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;

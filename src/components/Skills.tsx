
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaJava,
  FaPython, FaDatabase
} from "react-icons/fa";
import {
  SiSpringboot, SiMongodb, SiMysql, SiFlask, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv
} from "react-icons/si";
import { FlaskConical, Braces, FlaskRound, Wrench } from "lucide-react";

// Skill data with rows explicitly defined for Full Stack and AI/ML
const skillSections = [
  {
    label: "Full Stack",
    icon: <Braces className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "React.js", icon: <FaReact className="h-10 w-10 text-[#61DAFB]" /> },
        { name: "HTML", icon: <FaHtml5 className="h-10 w-10 text-[#e34c26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="h-10 w-10 text-[#264de4]" /> },
        { name: "JavaScript", icon: <FaJsSquare className="h-10 w-10 text-[#f0db4f]" /> },
      ],
      [
        { name: "Java", icon: <FaJava className="h-10 w-10 text-[#f89820]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="h-10 w-10 text-[#6db33f]" /> },
        { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#00758f]" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-[#4db33d]" /> }
      ],
      [
        { name: "Flask", icon: <SiFlask className="h-10 w-10 text-[#ffffff]" /> }
      ]
    ]
  },
  {
    label: "AI/ML",
    icon: <FlaskConical className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "Python", icon: <FaPython className="h-10 w-10 text-[#3776ab]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="h-10 w-10 text-[#ff6f00]" /> },
        { name: "PyTorch", icon: <SiPytorch className="h-10 w-10 text-[#ee4c2c]" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="h-10 w-10 text-[#f7931e]" /> },
      ],
      [
        { name: "OpenCV", icon: <SiOpencv className="h-10 w-10 text-[#5c3ee8]" /> },
      ]
    ]
  },
  {
    label: "Databases",
    icon: <FaDatabase className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#00758f]" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-[#4db33d]" /> }
      ]
    ]
  },
  {
    label: "Tools",
    icon: <Wrench className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    rows: [
      [
        { name: "VS Code", icon: <img src="https://cdn.simpleicons.org/visualstudiocode/007ACC/fff" alt="VSCode" className="h-10 w-10" /> }
      ]
    ]
  }
];

// Helper to fill the row so that all skill rows have 4 columns (for alignment)
function getFilledRow(row: Array<{ name: string; icon: React.ReactNode }>) {
  const filledRow = [...row];
  while (filledRow.length < 4) {
    // Use null for empty spots for alignment
    filledRow.push(null);
  }
  return filledRow;
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
          <h2 className="text-4xl font-serif font-bold text-center">Skills</h2>
          <p className="text-lg text-muted-foreground text-center mt-4 mb-12 max-w-2xl mx-auto">
            A categorized overview of my technical and professional skillset.
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
                  <span>{section.icon}</span>
                  <h3 className="text-3xl font-bold font-sans">{section.label}</h3>
                </div>
                {/* Grid of Skills - ROWS */}
                <div className="flex flex-col gap-8">
                  {section.rows.map((row, rowIdx) => {
                    const filledRow = getFilledRow(row);
                    return (
                      <div
                        key={rowIdx}
                        className="flex flex-row gap-7 md:gap-9 justify-center items-stretch"
                      >
                        {filledRow.map((skill, idx) =>
                          skill ? (
                            <Tooltip key={skill.name}>
                              <TooltipTrigger asChild>
                                <Card
                                  className="flex flex-col items-center justify-center bg-card border-none rounded-2xl py-7 w-[110px] h-[140px] shadow-lg transition-all hover:scale-[1.07]"
                                >
                                  <div>{skill.icon}</div>
                                  <span className="mt-3 text-md text-foreground font-medium font-sans text-center">{skill.name}</span>
                                </Card>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            // Empty card placeholder for grid symmetry
                            <div
                              key={`empty-${idx}`}
                              className="w-[110px] h-[140px] opacity-0 pointer-events-none select-none"
                              aria-hidden
                            />
                          )
                        )}
                      </div>
                    );
                  })}
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

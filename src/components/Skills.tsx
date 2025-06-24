import { motion, useScroll, useTransform } from "framer-motion";
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
import { Code, Github, Wrench, Sparkles } from "lucide-react";

// Add Visual Studio Code SVG as a React component
const VSCodeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-10 w-10"><mask id="a" width="128" height="128" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType:'alpha'}}><path fill="#fff" fillRule="evenodd" d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z" clipRule="evenodd"/></mask><g mask="url(#a)"><path fill="#0065A9" d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"/><g filter="url(#b)"><path fill="#007ACC" d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"/></g><g filter="url(#c)"><path fill="#1F9CF0" d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"/></g><path fill="url(#d)" fillRule="evenodd" d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z" clipRule="evenodd" opacity="0.25" style={{mixBlendMode:'overlay'}}/></g><defs><filter id="b" width="144.744" height="113.408" x="-8.41115" y="22.5944" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.16667"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape"/></filter><filter id="c" width="56.6667" height="144.007" x="79.6667" y="-8.0035" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.16667"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape"/></filter><linearGradient id="d" x1="63.9222" x2="63.9222" y1="0.329902" y2="127.67" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs></svg>
);

// Tech stack data matching resume (excluding soft skills)
const techStackSections = [
  {
    label: "Programming Languages",
    icon: <Code className="w-7 h-7 text-[#a78bfa] bg-[#272133] rounded-xl p-1" />,
    description: "Core languages I work with",
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
    description: "Frontend and backend technologies",
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
    description: "Database management systems",
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
    description: "Development and collaboration tools",
    rows: [
      [
        { name: "Git", icon: <Github className="h-10 w-10 text-[#ea4335]" /> },
        { name: "GitHub", icon: <FaGithub className="h-10 w-10 text-[#fff]" /> },
        { name: "Postman", icon: <SiPostman className="h-10 w-10 text-[#FF6C37]" /> },
        { name: "VS Code", icon: <VSCodeLogo /> },
      ],
    ],
  },
];

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2], [0.8, 1]);

  return (
    <section id="skills" className="w-full bg-background py-32 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ opacity }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </motion.div>

      <motion.div 
        style={{ scale }}
          className="w-full"
      >
        {/* Section Title & Accent Stripe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent text-center">
              Tech Stack
            </h2>
            <motion.div 
              className="h-1 w-24 bg-accent rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
          </motion.div>
          <motion.p 
            className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A comprehensive overview of my technical expertise and tools I work with.
          </motion.p>
        </motion.div>

        {/* Tech Stack Categories */}
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-col gap-20">
            {techStackSections.map((section, i) => (
              <motion.div
                key={section.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <motion.div 
                  className="flex items-center gap-3 mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                      className="p-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 shadow-lg"
                  >
                    {section.icon}
                  </motion.div>
                  <div>
                      <h3 className="text-2xl font-bold font-sans tracking-wide text-accent relative">
                      {section.label}
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {section.description}
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-col gap-8">
                  {section.rows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                    >
                      {row.map((skill, idx) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              className="w-full"
                            >
                              <div className="flex flex-col items-center gap-2 p-4 glass-card transform transition-all duration-500 hover:scale-110 min-w-[120px] bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                                <motion.div 
                                  className="text-3xl"
                                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                                  transition={{ duration: 0.4 }}
                                >
                                  {skill.icon}
                                </motion.div>
                                <span className="text-gray-300 text-sm text-center">{skill.name}</span>
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-accent/90 backdrop-blur-sm text-accent-foreground border-accent/50">
                            <p className="font-medium">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                      {/* Fill empty columns for alignment */}
                      {row.length < 4 &&
                        Array.from({ length: 4 - row.length }).map((_, i) => (
                          <div key={`empty-${i}`} className="hidden lg:block" />
                        ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>
      </motion.div>
      </div>
    </section>
  );
};

export default Skills;

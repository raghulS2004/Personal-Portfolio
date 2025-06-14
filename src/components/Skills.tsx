
import { motion } from "framer-motion";
import { Code, Database, MonitorSmartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-8 h-8 text-accent" />,
    skills: ["Python", "JavaScript", "Java", "C"],
  },
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="w-8 h-8 text-accent" />,
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Database className="w-8 h-8 text-accent" />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases & Tools",
    icon: <Wrench className="w-8 h-8 text-accent" />,
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-center">My Tech Stack</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import { motion } from "framer-motion";

const skills = ["Problem Solver", "Backend Enthusiast", "MERN Developer", "Lifelong Learner"];

const About = () => {
  return (
    <section id="about" className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-serif font-bold text-center">About Me</h2>
        <p className="mt-8 max-w-3xl mx-auto text-lg text-center text-muted-foreground">
          Full Stack Developer (MERN) and B.E. CSE student with a passion for building scalable web apps. Experienced in React, Node.js, MongoDB, and more, with a solid grasp of system design and clean coding practices.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary px-4 py-2 rounded-full text-secondary-foreground"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

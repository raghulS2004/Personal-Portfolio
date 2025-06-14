
import { motion } from "framer-motion";

const skills = [
  "Problem Solver",
  "Backend Enthusiast",
  "MERN Developer",
  "Lifelong Learner",
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif mb-6 text-foreground">About Me</h2>
          <p className="max-w-3xl text-lg text-gray-600 mb-8">
            Full Stack Developer (MERN) and B.E. CSE student with a passion for building scalable web apps. Experienced in React, Node.js, MongoDB, and more, with a solid grasp of system design and clean coding practices.
          </p>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-full bg-primary/10 text-primary font-semibold px-5 py-2 text-sm shadow"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;

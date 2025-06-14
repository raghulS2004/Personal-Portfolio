
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Blog Management System",
    description: "A full-stack MERN blog with authentication, CRUD operations, and a responsive UI.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop`,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "RecipeHub",
    description: "MERN application with JWT authentication, REST APIs, and search/pagination features.",
    stack: ["React", "MongoDB", "JWT", "REST API"],
    image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop`,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather App",
    description: "Displays real-time weather data using the OpenWeatherMap API and features location-based search.",
    stack: ["JavaScript", "HTML/CSS", "API"],
    image: `https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop`,
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Commerce UI",
    description: "A React-based frontend for an e-commerce site, with product listings, cart logic, and a responsive layout.",
    stack: ["React", "Flexbox/Grid"],
    image: `https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop`,
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif mb-12 text-foreground">Projects</h2>
        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
            >
              <div className={`relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-card ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-primary/10 px-3 py-1 text-sm text-primary rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild className="rounded-full px-5 py-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button asChild variant="secondary" className="rounded-full px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

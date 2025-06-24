import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Blog Management System",
    description:
      "A full-stack MERN blog with authentication, CRUD operations, and a responsive UI.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/raghulS2004/Blog-App",
    liveUrl: "https://blog-app-im5z-f5w2j5jyq-raghuls-projects-bf0226ce.vercel.app",
  },
  {
    title: "RecipeHub",
    description:
      "MERN application with JWT authentication, REST APIs, and search/pagination features.",
    stack: ["React", "MongoDB", "JWT", "REST API"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "Displays real-time weather data using the OpenWeatherMap API and features location-based search.",
    stack: ["JavaScript", "HTML/CSS", "API"],
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/raghulS2004/Weather-App",
    liveUrl: "https://weather-app-alpha-five-11.vercel.app",
  },
  {
    title: "E-Commerce UI",
    description:
      "A React-based frontend for an e-commerce site, with product listings, cart logic, and a responsive layout.",
    stack: ["React", "Flexbox/Grid"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-background py-24 min-h-[100vh] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent text-center">
          Projects
        </h2>
        <div className="h-1 w-24 bg-accent rounded-full mx-auto mt-6 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1a1c22] rounded-2xl overflow-hidden shadow-md border border-[#23242a] flex flex-col transition-all duration-300 group hover:shadow-2xl hover:scale-[1.04] hover:border-accent/60 hover:-translate-y-2"
            >
              <div className="w-full h-48 bg-[#23242a] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm min-h-[56px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#24262e] text-xs text-accent-foreground px-3 py-1.5 rounded-full font-medium border border-[#23242a] tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-primary/80 transition-colors text-sm focus:outline-none"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors text-sm focus:outline-none"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

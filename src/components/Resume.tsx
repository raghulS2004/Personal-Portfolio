
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Web Developer Intern",
    org: "Arjun Vision Tech Solutions (Remote)",
    description: "Developed features for client web applications, collaborated with a team using agile practices, and helped optimize performance and UI responsiveness.",
    year: "2024",
  },
  // Add more if needed
];

const education = [
  {
    title: "B.E. Computer Science Engineering",
    org: "Saveetha Engineering College",
    description: "GPA: 8.0 — Coursework in algorithms, data structures, and full-stack development. Participated in software development clubs.",
    year: "2022 – 2026",
  },
  {
    title: "HSC (12th Grade)",
    org: "Vivekananda Vidyalaya, CBSE",
    description: "Achieved 89%. Excelled in Mathematics and Physics, active in science exhibitions.",
    year: "2022",
  },
  {
    title: "SSLC (10th Grade)",
    org: "Vivekananda Vidyalaya, CBSE",
    description: "Score: 79%. Completed secondary education with emphasis on foundational sciences.",
    year: "2020",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.75,
      type: "spring"
    }
  }),
};

const TimelineSection = ({ items, icon, headingColor, sectionTitle }: {
  items: typeof experience, icon: JSX.Element, headingColor: string, sectionTitle: string
}) => {
  return (
    <div>
      <div className="flex items-center mb-10">
        <span className={`rounded-full bg-accent/20 p-2 mr-3 text-${headingColor}`}>
          {icon}
        </span>
        <h3 className={`text-2xl sm:text-3xl font-bold font-sans text-${headingColor}`}>{sectionTitle}</h3>
      </div>
      <div className="relative pl-7">
        {/* Vertical line accent */}
        <span className="absolute top-0 left-3 w-1 bg-gradient-to-b from-accent/80 via-accent/30 to-transparent rounded-full h-full" />
        <div className="flex flex-col gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title + idx}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
              variants={sectionVariants}
            >
              {/* Timeline dot */}
              <span className={`absolute -left-[27px] top-7 w-5 h-5 rounded-full border-4 border-background bg-accent`} />
              <div className="bg-[#1a1c22] rounded-2xl shadow-md border border-[#23242a] p-6 pb-4 pl-6 relative flex flex-col md:flex-row items-start gap-2 md:gap-6 group hover:shadow-2xl transition-shadow duration-300">
                <div className="flex-1">
                  <div className="flex items-center justify-between w-full mb-1">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.title}</h4>
                    <span className="text-xs text-accent font-semibold tracking-wide bg-[#21223a] rounded px-3 py-1 ml-3">
                      {item.year}
                    </span>
                  </div>
                  <h5 className="text-base font-semibold text-accent mb-1">{item.org}</h5>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return (
    <section id="resume" className="bg-secondary py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-center mb-14 text-foreground">My Journey</h2>
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          <TimelineSection
            items={experience}
            icon={<Briefcase className="h-7 w-7 text-accent" />}
            headingColor="accent"
            sectionTitle="Experience"
          />
          <TimelineSection
            items={education}
            icon={<GraduationCap className="h-7 w-7 text-purple-400" />}
            headingColor="purple-400"
            sectionTitle="Education"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;

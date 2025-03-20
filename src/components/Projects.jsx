import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child animation slightly
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 py-10" id="work">
      <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        My Projects
      </h1>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 bg-gray-900"
            variants={projectVariants}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 flex flex-col text-white">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white rounded-full py-2 px-4 text-sm"
                >
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white rounded-full py-2 px-4 text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

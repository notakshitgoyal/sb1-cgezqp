import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BezierGAN for Airfoil Generation',
      description: 'Developed a Generative Adversarial Network utilizing Bezier curves to generate diverse and realistic airfoil shapes.',
      tech: ['TensorFlow', 'Python', 'Deep Learning', 'GANs'],
      github: 'https://github.com/notakshitgoyal',
    },
    {
      title: 'NutriScan',
      description: 'A web-based solution designed to assist users in analyzing food items based on their dietary restrictions and medical conditions.',
      tech: ['Flask', 'PyTesseract', 'PIL', 'PyTorch', 'Gemini API'],
      github: 'https://github.com/notakshitgoyal/NutriScan',
    },
    {
      title: 'CTGAN: Data Privacy Solution',
      description: 'Implemented CTGAN to generate high-quality synthetic tabular data, ensuring anonymization of personally identifiable information.',
      tech: ['Python', 'GANs', 'Data Privacy', 'Machine Learning'],
      github: 'https://github.com/notakshitgoyal/data_privacy_CTGAN',
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
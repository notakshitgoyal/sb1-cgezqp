import React from 'react';
import { Code2, Database, Terminal, Shield, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-purple-500" size={24} />,
      title: 'Languages',
      skills: ['C/C++', 'Python', 'SQL', 'Visual Basic Application']
    },
    {
      icon: <Brain className="text-cyan-500" size={24} />,
      title: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'GANs', 'Deep Learning']
    },
    {
      icon: <Terminal className="text-purple-500" size={24} />,
      title: 'Development Tools',
      skills: ['VScode', 'Git', 'Github', 'Wireshark']
    },
    {
      icon: <Shield className="text-cyan-500" size={24} />,
      title: 'Security',
      skills: ['Information Security', 'Data Privacy', 'Digital Forensics']
    },
    {
      icon: <Database className="text-purple-500" size={24} />,
      title: 'Data & Documentation',
      skills: ['Matplotlib', 'MS Excel', 'Latex', 'Microsoft Office']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Achievements</h3>
          <div className="space-y-4 text-gray-300">
            <p>• Letter of Recommendation from Dr. Prateek Gupta, Head of Department, IIT Delhi</p>
            <p>• Top Performance Rating (5/5) at BNY Mellon</p>
            <p>• Grade S in Research under Dr. Deepika J</p>
            <p>• Top 4 in Schneider CTF Challenge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
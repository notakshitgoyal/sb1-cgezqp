import React from 'react';
import { Building2, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Experience & Education
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Building2 className="text-purple-500" /> Work Experience
            </h3>

            <div className="space-y-8">
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Investment Management Intern</h4>
                    <p className="text-gray-400">BNY, Pune</p>
                  </div>
                  <span className="text-sm text-gray-400">June 2024 - August 2024</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed a collateral dispute management tool for fund recovery</li>
                  <li>Automated patch compliance reports, reducing processing time from 4 hours to 30 seconds</li>
                </ul>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Machine Learning Intern</h4>
                    <p className="text-gray-400">IIT-Delhi & University of Waterloo</p>
                  </div>
                  <span className="text-sm text-gray-400">Sep 2023 - Dec 2023</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Developed Beizer-GAN architectures using TensorFlow</li>
                  <li>Generated synthetic airfoils through these architectures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-cyan-500" /> Education
            </h3>

            <div className="space-y-8">
              <div className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">B.Tech in Computer Science (Information Security)</h4>
                    <p className="text-gray-400">Vellore Institute of Technology, Vellore</p>
                  </div>
                  <span className="text-sm text-gray-400">2021-25</span>
                </div>
                <p className="text-gray-300">CGPA: 8.61</p>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Class XII (CBSE)</h4>
                    <p className="text-gray-400">Bhrama Shakti Public School, Delhi</p>
                  </div>
                  <span className="text-sm text-gray-400">2021</span>
                </div>
                <p className="text-gray-300">Score: 75.2%</p>
              </div>

              <div className="bg-black/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white">Class X (CBSE)</h4>
                    <p className="text-gray-400">Ryan International School, Gurgaon</p>
                  </div>
                  <span className="text-sm text-gray-400">2019</span>
                </div>
                <p className="text-gray-300">Score: 81.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
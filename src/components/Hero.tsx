import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-purple-500/50 object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Akshit Goyal
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Machine Learning Engineer & Full Stack Developer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="flex justify-center gap-6 text-gray-400">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                8.61
              </div>
              <div className="text-sm">CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
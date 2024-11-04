import React from 'react';
import { Menu, X, Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          AG
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/notakshitgoyal" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/akshitgoyall/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:akshitgoyal92051@gmail.com"
               className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://leetcode.com/u/akshitgoyal92051/" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-white transition-colors">
              <BookOpen size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4">
          <div className="flex flex-col items-center gap-4">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            
            <div className="flex items-center gap-6 mt-4">
              <a href="https://github.com/notakshitgoyal" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akshitgoyall/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:akshitgoyal92051@gmail.com"
                 className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://leetcode.com/u/akshitgoyal92051/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                <BookOpen size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
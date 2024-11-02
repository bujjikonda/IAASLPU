import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-iaas-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src="/iaas-logo.svg" alt="IAAS Logo" className="h-12 w-auto" />
              <img src="/lpu-logo.svg" alt="LPU Logo" className="h-10 w-auto ml-2" />
              <span className="ml-2 text-xl font-bold">
                <span className="text-[#70AD47]">IAAS</span> <span className="text-[#70AD47]">LPU</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-iaas-black hover:text-[#70AD47]">About</Link>
            <Link to="/projects" className="text-iaas-black hover:text-[#70AD47]">Projects</Link>
            <Link to="/internships" className="text-iaas-black hover:text-[#70AD47]">Internships</Link>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/iaas-india-lc-lpu" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/iaas.lpu" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
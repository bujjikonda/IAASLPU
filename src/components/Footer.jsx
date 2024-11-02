import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#70AD47] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/iaas-logo.svg" alt="IAAS INDIA LC LPU" className="h-16 w-auto mb-4" />
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com/company/iaas-india-lc-lpu" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/iaas.lpu" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-iaas-orange">Home</Link></li>
              <li><Link to="/about" className="hover:text-iaas-orange">About</Link></li>
              <li><Link to="/projects" className="hover:text-iaas-orange">Projects</Link></li>
              <li><Link to="/internships" className="hover:text-iaas-orange">Internships</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Lovely Professional University</p>
            <p>Phagwara, Punjab</p>
            <p>India</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p>Stay connected with us on social media for updates and announcements.</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} IAAS INDIA LC LPU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          About <span className="text-[#70AD47]">IAAS</span> <span className="text-[#70AD47]">LPU</span>
        </h2>
      </div>
      <div className="mt-10">
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="mb-6">
            IAAS (International Association of Students in Agricultural and Related Sciences) is the biggest student organization in the field of agriculture and related sciences worldwide. IAAS was founded in 1957 in Tunisia, and started with only 8 member countries. It grew a lot to the organization it is nowadays with over 50 member countries and about 10,000 students as our members.
          </p>
          
          <h3 className="text-2xl font-bold text-[#70AD47] mt-8 mb-4">Our Aims</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Encouraging the exchange of ideas</li>
            <li>Promoting cooperation with all students in agricultural sciences</li>
            <li>Preparing our members for their future</li>
            <li>Having impact on local societies</li>
            <li>Demonstrating sustainable agriculture, economics, and food production</li>
            <li>Making higher education systems accessible for everyone</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#70AD47] mt-8 mb-4">Our Commitment</h3>
          <p className="mb-6">
            We truly believe that preparing and providing the correct tools, connections and worldwide vision to students related with the field of agriculture and life sciences will develop our members into better professionals who will be highly qualified to affront the future challenges of our sector.
          </p>
          
          <p className="mb-6">
            IAAS is striving towards creating a new generation of passionate and innovating leaders worldwide. We are a global network of youth that is pursuing excellence by sharing experiences, knowledge and ideas, creating future leaders of agriculture today! With a strong history and over 60 years of existence, we believe that youth hold the key to change the world. We are taking the challenge to feed the continuous growing population while improving the quality of people's lives at the same time.
          </p>

          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://linkedin.com/company/iaas-india-lc-lpu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#70AD47] hover:text-opacity-80">
              <img src="/linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
            </a>
            <a href="https://instagram.com/iaas.lpu" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#70AD47] hover:text-opacity-80">
              <img src="/instagram.svg" alt="Instagram" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
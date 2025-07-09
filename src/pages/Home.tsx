import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Clivy',
      description: 'Advanced clipboard manager for macOS with intuitive interface and powerful features.',
      image: '/api/placeholder/300/200',
      tech: ['Electron', 'TypeScript', 'React', 'Tailwind CSS'],
      link: 'https://github.com/jaehuiui/clivy',
      status: 'Active'
    },
    {
      title: 'Desktop Applications',
      description: 'Cross-platform desktop applications built with modern technologies.',
      image: '/api/placeholder/300/200',
      tech: ['Electron', 'React', 'TypeScript', 'Node.js'],
      link: '#',
      status: 'In Development'
    },
    {
      title: 'Web Applications',
      description: 'Modern web applications with responsive design and great user experience.',
      image: '/api/placeholder/300/200',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="heading bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Welcome to Jaehuiui Studio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating innovative software solutions with modern technologies. 
              Specializing in desktop applications, web development, and user experience design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/resume" className="btn btn-primary">
                View Resume
              </Link>
              <Link to="/blog" className="btn btn-secondary">
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading">Featured Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the applications and tools I've built to solve real-world problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card animate-slide-up hover:scale-105 transition-transform">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-400">Service Preview</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      service.status === 'Active' 
                        ? 'bg-green-600 text-white' 
                        : service.status === 'In Development'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-gray-600 text-white'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={service.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading">Technical Skills</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="subheading text-blue-400">Frontend</h3>
              <div className="space-y-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Electron'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 className="subheading text-green-400">Backend</h3>
              <div className="space-y-2">
                {['Node.js', 'Express', 'REST APIs', 'Database Design', 'Authentication'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 className="subheading text-purple-400">Tools & Others</h3>
              <div className="space-y-2">
                {['Git', 'Docker', 'CI/CD', 'Testing', 'UI/UX Design'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-white">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on a project or have questions about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@jaehuiui.com"
              className="btn bg-white text-blue-600 hover:bg-gray-100"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/jaehuiui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border border-white text-white hover:bg-white hover:text-blue-600"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
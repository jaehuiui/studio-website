import React from 'react'

const Resume: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Electron'],
    backend: ['Node.js', 'Express', 'REST APIs', 'Database Design', 'Authentication', 'Server Administration'],
    tools: ['Git', 'Docker', 'CI/CD', 'Webpack', 'Vite', 'Jest', 'ESLint', 'Prettier'],
    design: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Responsive Design', 'Design Systems'],
  }

  const experiences = [
    {
      company: 'Jaehuiui Studio',
      position: 'Founder & Lead Developer',
      period: '2023 - Present',
      location: 'Seoul, South Korea',
      description: [
        'Founded and established a software development studio specializing in desktop applications and web solutions',
        'Developed Clivy, a modern clipboard manager for macOS using Electron, React, and TypeScript',
        'Built responsive web applications with React, Next.js, and Tailwind CSS',
        'Implemented CI/CD pipelines and automated deployment processes',
      ],
    },
    {
      company: 'Tech Company',
      position: 'Senior Frontend Developer',
      period: '2021 - 2023',
      location: 'Seoul, South Korea',
      description: [
        'Led frontend development for multiple high-traffic web applications',
        'Implemented modern React patterns and TypeScript for type-safe development',
        'Mentored junior developers and established coding standards',
        'Optimized application performance resulting in 40% faster load times',
      ],
    },
    {
      company: 'Digital Agency',
      position: 'Full Stack Developer',
      period: '2019 - 2021',
      location: 'Seoul, South Korea',
      description: [
        'Developed end-to-end web applications using React, Node.js, and MongoDB',
        'Created responsive designs and implemented user-friendly interfaces',
        'Collaborated with design teams to translate mockups into functional applications',
        'Managed database design and API development',
      ],
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Seoul National University',
      period: '2015 - 2019',
      location: 'Seoul, South Korea',
      description: 'Focus on Software Engineering and Human-Computer Interaction',
    },
  ]

  const projects = [
    {
      name: 'Clivy',
      description: 'Advanced clipboard manager for macOS with intuitive interface and powerful features',
      technologies: ['Electron', 'React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://github.com/jaehuiui/clivy',
    },
    {
      name: 'Portfolio Website',
      description: 'Personal portfolio website built with React and deployed on GitHub Pages',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/jaehuiui/jaehuiui-studio',
    },
    {
      name: 'Task Management App',
      description: 'Full-stack task management application with real-time collaboration features',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <section className="section bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Software Developer & Designer passionate about creating innovative solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card">
                <h2 className="subheading text-white mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-20">Email:</span>
                    <a className="text-blue-400 hover:text-blue-300" href="mailto:contact@jaehuiui.com">
                      contact@jaehuiui.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-20">GitHub:</span>
                    <a
                      className="text-blue-400 hover:text-blue-300"
                      href="https://github.com/jaehuiui"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      github.com/jaehuiui
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-20">LinkedIn:</span>
                    <a
                      className="text-blue-400 hover:text-blue-300"
                      href="https://linkedin.com/in/jaehuiui"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      linkedin.com/in/jaehuiui
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 w-20">Location:</span>
                    <span className="text-gray-300">Seoul, South Korea</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h2 className="subheading text-white mb-4">Summary</h2>
                <p className="text-gray-300 leading-relaxed">
                  Experienced software developer with 5+ years of expertise in full-stack development, desktop
                  applications, and modern web technologies. Passionate about creating user-centric solutions and
                  building scalable applications with clean, maintainable code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="heading text-center mb-16">Technical Skills</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card">
                <h3 className="subheading text-blue-400 mb-4">Frontend</h3>
                <div className="space-y-2">
                  {skills.frontend.map(skill => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="subheading text-green-400 mb-4">Backend</h3>
                <div className="space-y-2">
                  {skills.backend.map(skill => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="subheading text-purple-400 mb-4">Tools</h3>
                <div className="space-y-2">
                  {skills.tools.map(skill => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="subheading text-orange-400 mb-4">Design</h3>
                <div className="space-y-2">
                  {skills.design.map(skill => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="heading text-center mb-16">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="card mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                    <p className="text-blue-400 font-semibold">{experience.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-medium">{experience.period}</p>
                    <p className="text-gray-400 text-sm">{experience.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="heading text-center mb-16">Education</h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold">{edu.school}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-medium">{edu.period}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="heading text-center mb-16">Featured Projects</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="card hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Resume Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading text-white mb-8">Download Resume</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Get a PDF version of my resume for your records.</p>
          <button className="btn bg-white text-blue-600 hover:bg-gray-100" type="button">
            Download PDF Resume
          </button>
        </div>
      </section>
    </div>
  )
}

export default Resume

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Responsive Portfolio',
      description: 'Personal portfolio website with responsive design',
      tech: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/ecommerce'
    },
    {
      title: 'Learning Management System',
      description: 'Educational platform for online learning',
      tech: ['React', 'Express', 'PostgreSQL'],
      github: 'https://github.com/yourusername/lms'
    },
    {
      title: 'Netflix Clone',
      description: 'Streaming platform clone with similar features',
      tech: ['React', 'Firebase', 'TMDB API'],
      github: 'https://github.com/yourusername/netflix-clone'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with rooms and direct messaging',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/chat-app'
    },
    {
      title: 'Task Management System',
      description: 'Project management tool with task tracking and team collaboration',
      tech: ['React', 'Express.js', 'MongoDB', 'Redux'],
      github: 'https://github.com/yourusername/task-manager'
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title neon-text">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
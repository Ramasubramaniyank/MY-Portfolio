import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React.js', proficiency: 85 },
    { name: 'HTML', proficiency: 95 },
    { name: 'CSS', proficiency: 90 },
    { name: 'JavaScript', proficiency: 88 },
    { name: 'Express.js', proficiency: 82 },
    { name: 'MongoDB', proficiency: 80 },
    { name: 'Node.js', proficiency: 85 },
    { name: 'Java', proficiency: 75 },
    { name: 'C', proficiency: 70 },
    { name: 'Python', proficiency: 78 }
  ];

  // Split skills into two columns
  const midPoint = Math.ceil(skills.length / 2);
  const leftColumnSkills = skills.slice(0, midPoint);
  const rightColumnSkills = skills.slice(midPoint);

  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title neon-text">Skills</h2>
      <div className="skills-columns">
        <div className="skills-column">
          {leftColumnSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
        <div className="skills-column">
          {rightColumnSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
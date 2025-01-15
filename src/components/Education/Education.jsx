import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-container">
      <h2 className="section-title neon-text">Education</h2>
      <div className="education-items">
        <div className="education-item">
          <h3>
            Bachelor of Engineering in Computer Science and Specialization in
            Cyber Security
          </h3>
          <p>Sri venkateswaraa college of technology </p>
          <p>2022 - 2026</p>
          <p>GPA : 8/10</p>
        </div>
        <div className="education-item">
          <h3>Higher Secondary</h3>
          <p>H.N.U.C.Higher.Secondary.School</p>
          <p>2021 - 2022</p>
          <p>Percentage : 85</p>
        </div>
        <div className="education-item">
          <h3>SSLC</h3>
          <p>H.N.U.C.Higher.Secondary.School</p>
          <p>2019 - 2020</p>
          <p>Percentage : 82.5</p>
          
        </div>
      </div>
    </section>
  );
};

export default Education;

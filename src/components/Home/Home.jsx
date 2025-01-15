import { useEffect, useState } from 'react';
import './Home.css';
import profileImage from '../../assets/dummy.jpeg'; // Make sure to add your image to this path

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ['Cyber Security Student', 'MERN Stack Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const tick = () => {
    let i = loopNum % textArray.length;
    let fullText = textArray[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prevSpeed => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="home-container">
      <div className="content">
        <div className="text-content">
          <h1 className="neon-text">Hello, I'm Ramasubramaniyan</h1>
          <h2 className="typing-text">{text}</h2>
          <p className="description">
            Passionate about cybersecurity and full-stack development, dedicated to creating secure and scalable applications.
          </p>
          <div className="social-links">
            <a href="https://github.com/Ramasubramaniyank" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="www.linkedin.com/in/ramasubramaniyan-k" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ram_._official_._07" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://leetcode.com/Ramasubramaniyan123" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code"></i>
            </a>
            <a href="https://www.hackerrank.com/rameshvijay578" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-hackerrank"></i>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <img src={profileImage} alt="Ramasubramaniyan" />
        </div>
      </div>
    </section>
  );
};
export default Home;
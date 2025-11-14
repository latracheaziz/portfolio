import { useEffect, useRef, useState } from 'react';
import { about } from '../constants/data';
import '../styles/About.css';

const About = ({ t, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.about.title}
        </h2>
        <p className={`about-text ${isVisible ? 'animate-in' : ''}`}>
          {about[lang]}
        </p>
      </div>
    </section>
  );
};

export default About;

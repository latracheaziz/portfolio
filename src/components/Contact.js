import { useEffect, useRef, useState } from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { personalInfo } from '../constants/data';
import '../styles/Contact.css';

const Contact = ({ t }) => {
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

  const contactInfo = [
    {
      icon: <MailOutlined />,
      label: t.contact.email,
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <PhoneOutlined />,
      label: t.contact.phone,
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <LinkedinOutlined />,
      label: t.contact.linkedin,
      value: personalInfo.linkedin,
      link: `https://${personalInfo.linkedin}`
    },
    {
      icon: <GithubOutlined />,
      label: t.contact.github,
      value: personalInfo.github,
      link: `https://${personalInfo.github}`
    },
    {
      icon: <EnvironmentOutlined />,
      label: t.contact.location,
      value: personalInfo.location,
      link: null
    }
  ];

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.contact.title}
        </h2>
        <p className={`contact-subtitle ${isVisible ? 'animate-in' : ''}`}>
          {t.contact.subtitle}
        </p>
        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`contact-item ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact-icon">{info.icon}</div>
              <h4>{info.label}</h4>
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              ) : (
                <p>{info.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

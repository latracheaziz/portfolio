import { Button } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import { personalInfo } from '../constants/data';
import '../styles/Hero.css';

const Hero = ({ t }) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePath;
    link.download = 'Aziz_Latrache_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-photo-container">
          <img src={`${process.env.PUBLIC_URL}/aziz_photo.jpg`} alt={personalInfo.name} className="hero-photo" />
        </div>

        <div className="hero-text">
          <h1 className="hero-name">
            {personalInfo.name.split(' ').map((word, index) => (
              <span key={index} className="name-word" style={{ animationDelay: `${index * 0.2}s` }}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-buttons">
            <Button
              type="primary"
              size="large"
              icon={<DownloadOutlined />}
              onClick={handleDownloadResume}
              className="download-btn"
            >
              {t.hero.download}
            </Button>
            <Button
              size="large"
              icon={<MailOutlined />}
              onClick={scrollToContact}
              className="contact-btn"
            >
              {t.hero.contact}
            </Button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

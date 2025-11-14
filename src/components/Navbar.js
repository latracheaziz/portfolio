import { Button } from 'antd';
import { GlobalOutlined, MenuOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { personalInfo } from '../constants/data';
import '../styles/Navbar.css';

const Navbar = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">{personalInfo.name}</div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuOutlined />
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('about')}>{t.nav.about}</a>
          <a onClick={() => scrollToSection('education')}>{t.nav.education}</a>
          <a onClick={() => scrollToSection('skills')}>{t.nav.skills}</a>
          <a onClick={() => scrollToSection('projects')}>{t.nav.projects}</a>
          <a onClick={() => scrollToSection('volunteer')}>{t.nav.volunteer}</a>
          <a onClick={() => scrollToSection('languages')}>{t.nav.languages}</a>
          <a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
          <Button
            icon={<GlobalOutlined />}
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            className="lang-btn"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

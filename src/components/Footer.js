import { personalInfo } from '../constants/data';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      <p className="footer-tagline">Built with React & Ant Design</p>
    </footer>
  );
};

export default Footer;

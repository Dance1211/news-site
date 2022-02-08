import { Link } from "react-router-dom";
import './styles.css';

function Footer() {
  return (
    <footer className="Footer">
      <h2 className="Footer__siteName">NC-NEWS</h2>
      <Links/>
      <p className="Footer__copyright">© 2022 Clown Boner McFart </p>
    </footer>
  );
}

function Links() {
  return (
    <nav>
      <Link to="/" className="Footer__link">Home</Link>
    </nav>
  );
}

export default Footer;
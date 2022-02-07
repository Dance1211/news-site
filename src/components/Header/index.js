import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header__sticky">
        <Link to={'/'} className="Header__link">
          <h1 className="Header__title">NC-NEWS</h1>
        </Link>
        <button className="Header__navButton">
          <i style={{ color: "white" }} className="fas fa-bars" />
        </button>
      </div>
      <div className="Header__spacer" />
    </header>
  );
}

export default Header;
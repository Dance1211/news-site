import { Link } from 'react-router-dom';
import './styles.css';

export function HeaderSticky({toggleIsNavOpen}) {
  return <div className="HeaderSticky">
    <Link to={'/'} className="HeaderSticky__link">
      <h1 className="HeaderStick__title">NC-NEWS</h1>
    </Link>
    <button className="HeaderSticky__navButton" onClick={toggleIsNavOpen}>
      <i style={{ color: "white" }} className="fas fa-bars" />
    </button>
  </div>;
}

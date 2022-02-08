import useToggle from '../../hooks/Toggle';
import { HeaderSticky } from './HeaderSticky';
import Nav from './Nav';
import './styles.css';

function Header() {
  const [isNavOpen, toggleIsNavOpen] = useToggle();

  return (
    <header className="Header">
      <HeaderSticky toggleIsNavOpen={toggleIsNavOpen} />
      <Nav isNavOpen={isNavOpen} />
      <div className="Header__spacer" />
    </header>
  );
}

export default Header;
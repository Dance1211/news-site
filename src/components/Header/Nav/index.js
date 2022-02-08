import './styles.css';

function Nav({isNavOpen}) {
  return (
    <nav className={`Nav ${isNavOpen && "Nav--open"}`}>
      <div className="Nav__contents">
        ##NAV CONTENTS##
      </div>
    </nav>
  );
}

export default Nav;
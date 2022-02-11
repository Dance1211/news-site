import { useContext } from 'react';
import { AuthorCard } from '@components/AuthorCard';

import UserContext from '@context/User';

import './styles.css';
import { Link } from 'react-router-dom';

function Nav({ isNavOpen }) {
  const { user } = useContext(UserContext)
  return (
    <nav className={`Nav ${isNavOpen && "Nav--open"}`}>
      <div className="Nav__contents">
        <AuthorCard author={user} />
        <hr />
        <NavLinks username={user.username} />
      </div>
    </nav>
  );
}

function NavLinks({ username }) {
  return (
    <section>
      <p>Links</p>
      <ul>
        <li>
          <Link to="/">- Home</Link>
        </li>
        <li>
          <Link to={`/u/${username}`}>- Profile</Link>
        </li>
      </ul>
    </section>
  )
}

export default Nav;
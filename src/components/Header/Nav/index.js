import { useContext } from 'react';
import { AuthorCard } from '@components/AuthorCard';

import UserContext from '@context/User';

import './styles.css';

function Nav({isNavOpen}) {
  const { user } = useContext(UserContext)
  return (
    <nav className={`Nav ${isNavOpen && "Nav--open"}`}>
      <div className="Nav__contents">
        <AuthorCard author={user}/>
      </div>
    </nav>
  );
}

export default Nav;
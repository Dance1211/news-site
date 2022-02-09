import { useContext } from 'react';
import { AuthorCard } from '../../AuthorCard';

import UserContext from '../../../context/User';

import './styles.css';

function Nav({isNavOpen}) {
  const { user, setUser } = useContext(UserContext)
  return (
    <nav className={`Nav ${isNavOpen && "Nav--open"}`}>
      <div className="Nav__contents">
        <AuthorCard author={user}/>
      </div>
    </nav>
  );
}

export default Nav;
import { useContext } from 'react';
import { AuthorCard } from '@components/AuthorCard';

import UserContext from '@context/User';

import './styles.css';
import { Link } from 'react-router-dom';
import useTopics from '@hooks/Topics';

function Nav({ isNavOpen }) {
  const { user } = useContext(UserContext)
  return (
    <nav className={`Nav ${isNavOpen && "Nav--open"}`}>
      <div className="Nav__contents">
        <AuthorCard author={user} />
        <hr />
        <NavLinks username={user.username} />
        <TopicLinks />
      </div>
    </nav>
  );
}

function NavLinks({ username }) {
  return (
    <section>
      <h2>Links</h2>
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

function TopicLinks() {

  const topics = useTopics();

  return (
    <section>
      <h2>Topics</h2>
      <ul>
        {topics.map(({ slug }) => {
          return (
            <li>
              <Link to={`/t/${slug}`}>{`- ${slug}`}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Nav;
import { Link } from 'react-router-dom';
import * as dateService from '../../../../utils/date';
import useUserById from '../../../../hooks/UserById';
import { AuthorCard } from '../../../AuthorCard';
import './styles.css';

function Body({ article }) {
  const { title, body, author, created_at, votes } = article;
  const [authorData, isAuthorLoaded] = useUserById(author);

  return (
    <article className="ArticleBody">
      <Link to={`/u/${article.author}`}
        className="ArticlePreview__link"
      >
        {isAuthorLoaded && <AuthorCard author={authorData} />}
      </Link>
      <h2 className="ArticleBody__title">{title}</h2>
      <p className="ArticleBody__body">{body}</p>
      <p className="ArticleBody__date">{dateService.formatDateTime(created_at)}</p>
    </article>
  );
}

export default Body;
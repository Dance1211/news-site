import { Link } from 'react-router-dom';
import * as dateService from '../../../../utils/date';
import useUserById from '../../../../hooks/UserById';
import { voteSingleArticle } from '../../../../utils/api';
import { AuthorCard } from '../../../AuthorCard';
import Votes from '../../../Vote';
import './styles.css';

function Body({ article }) {
  const { article_id, title, body, author, created_at, votes } = article;
  const [authorData] = useUserById(author);

  return (
    <article className="ArticleBody">
      <Link to={`/u/${article.author}`}
        className="ArticlePreview__link"
      >
        <AuthorCard author={authorData} />
      </Link>
      <h2 className="ArticleBody__title">{title}</h2>
      <p className="ArticleBody__body">{body}</p>
      <p className="ArticleBody__date">{dateService.formatDateTime(created_at)}</p>
      <div className="ArticleBody__votes">
        <Votes
          voteNum={votes}
          onVoteUpPress={() => voteSingleArticle(article_id, 1)}
          onVoteDownPress={() => voteSingleArticle(article_id, -1)}
        />
      </div>
    </article>
  );
}

export default Body;
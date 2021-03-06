import { Link } from 'react-router-dom';
import * as dateService from '@utils/date';
import { voteSingleArticle } from '@utils/api';
import useUserById from '@hooks/UserById';
import { AuthorCard } from '@components/AuthorCard';
import Vote from '@components/Vote';
import './styles.css';

function ArticlePreview({ article }) {
  const { article_id, title, topic, created_at, votes, comment_count } = article;
  const [author] = useUserById(article.author);

  return (
    <div className="ArticlePreview">
      <Link to={`/t/${topic}`}
        className="ArticlePreview__link ArticlePreview__topic"
      >
        <p>{topic}</p>
      </Link>
      <p className="ArticlePreview__date">{dateService.formatDateTime(created_at)}</p>
      <Link to={`/t/${topic}/${article_id}`}
        className="ArticlePreview__link ArticlePreview__title"
      >
        <h3>{title}</h3>
      </Link>
      <Link to={`/u/${article.author}`}
        className="ArticlePreview__link ArticlePreview__author"
      >
        <AuthorCard author={author} />
      </Link>
      <Link to={`/t/${topic}/${article_id}#comments`}
        className="ArticlePreview__link ArticlePreview__comments"
      >
        <p>{comment_count} comment{comment_count !== 1 ? 's' : ''}</p>
      </Link>

      <div className="ArticlePreview__votes">
        <Vote
          voteNum={votes}
          onVoteUpPress={() => voteSingleArticle(article_id, 1)}
          onVoteDownPress={() => voteSingleArticle(article_id, -1)}
        />
      </div>
    </div>
  );
}

export default ArticlePreview;
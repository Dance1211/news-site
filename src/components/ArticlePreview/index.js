import './styles.css';
import * as dateService from '../../utils/date';
import useUserById from '../../hooks/UserById';
import { Link } from 'react-router-dom';

function ArticlePreview({ article }) {
  const { article_id, title, topic, created_at, votes, comment_count } = article;
  const [author, isAuthorLoaded] = useUserById(article.author);

  return (
    <div className="ArticlePreview">
      <p className="ArticlePreview__topic">{topic}</p>
      <p className="ArticlePreview__date">{dateService.formatDateTime(created_at)}</p>
      <Link to={`/articles/${article_id}`} className="ArticlePreview__title">
        <h3>{title}</h3>
      </Link>
      {isAuthorLoaded && <AuthorCard author={author} />}
      <p className="ArticlePreview__comments">{comment_count} comment{comment_count !== 1 ? 's' : ''}</p>
      <p className="ArticlePreview__votes">{votes} vote{votes !== 1 ? 's' : ''}</p>
    </div>
  );
}

function AuthorCard({ author: { username, avatar_url, name } }) {
  return (
    <div className="AuthorCard">
      <img className="AuthorCard__avatar" src={avatar_url} alt={name} />
      <h4 className="AuthorCard__name">{username}</h4>
    </div>
  )
}

export default ArticlePreview;
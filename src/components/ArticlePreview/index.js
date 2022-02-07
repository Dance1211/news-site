import './styles.css';
import * as dateService from '../../utils/date';
import useUserById from '../../hooks/UserById';

function ArticlePreview({ article }) {
  const { title, topic, created_at, votes, comment_count } = article;
  const [author, isAuthorLoaded] = useUserById(article.author);

  return (
    <div className="ArticlePreview">
      <p>{topic}</p>
      <p>{dateService.formatDateTime(created_at)}</p>
      <h3 className='ArticlePreview__title'>{title}</h3>
      {isAuthorLoaded && <AuthorCard author={author}/>}
      <p>{comment_count} comment{comment_count !== 1 ? 's' : ''}</p>
      <p>{votes} vote{votes !== 1 ? 's' : ''}</p>
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
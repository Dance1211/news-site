import './styles.css';

export function AuthorCard({ author: { username, avatar_url, name } }) {
  return (
    <div className="AuthorCard">
      <img className="AuthorCard__avatar" src={avatar_url} alt={name} />
      <h4 className="AuthorCard__name">{username}</h4>
    </div>
  );
}

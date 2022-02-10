import './styles.css';

export function AuthorCard(props) {
  if (!props.author) {
    return (
      <div className="AuthorCard">
        <div className="AuthorCard__avatar" />
        <div className="AuthorCard__blank" />
      </div>
    )
  }
  const { username, avatar_url, name } = props.author
  return (
    <div className="AuthorCard">
      <img className="AuthorCard__avatar" src={avatar_url} alt={name} />
      <h4 className="AuthorCard__name">{username}</h4>
    </div>
  );
}

function Body({ article }) {
  const { title, body, author, topic, created_at, votes } = article;
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

export default Body;
import { useContext, useState } from 'react';
import UserContext from '@context/User';
import { postComment } from '@utils/api';
import './styles.css';

function PostComment({ article_id, setComments }) {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [status, setStatus] = useState(null);

  const handleBody = (event) => {
    setBody(() => event.target.value);
    setStatus(() => null)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!body) {
      setStatus(() => "Cannot send a blank comment!")
    } else {
      postComment(article_id, user.username, body)
        .then((newComment) => {
          setComments((currComments) => [newComment, ...currComments]);
          setBody(() => "");
        })
        .catch((err) => {
          setStatus(() => "Unable to submit");
        })
    }
  }

  return (
    <section className="PostComment">
      <form onSubmit={handleSubmit}>
        <label className='postComment__'>
          <textarea
            className="PostComment__commentBody"
            value={body}
            onChange={handleBody}
            required
          />
        </label>
        <input type="submit" />
        <p>{status}</p>
      </form>
    </section>
  );
}

export default PostComment;
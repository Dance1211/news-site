import { useContext } from 'react';
import UserContext from '../../../../../context/User';
import './styles.css';

function PostComment() {
  const { user } = useContext(UserContext);

  return (
    <section className="PostComment">
      <form>
        <label>
          <textarea className="PostComment__commentBody"></textarea>

        </label>
        <button>Post</button>
      </form>
    </section>
  );
}

export default PostComment;
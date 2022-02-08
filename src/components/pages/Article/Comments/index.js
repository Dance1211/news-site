import * as dateService from "../../../../utils/date";
import useArticleComments from "../../../../hooks/CommentsByArticle";
import useUserById from "../../../../hooks/UserById";
import { AuthorCard } from "../../../AuthorCard";
import './styles.css';


function Comments({ author, article_id }) {
  const [comments] = useArticleComments(article_id)
  return (
    <section id="comments" className="Comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((commentData) => {
        return (
          <SingleComment
            isArticleAuthor={commentData.author === author}
            key={commentData.comment_id}
            commentData={commentData}
          />
        )
      })}
    </section>
  );
}

function SingleComment({ commentData, isArticleAuthor }) {
  const { author, body, created_at, votes } = commentData;
  const [authorData] = useUserById(author);
  return (
    <article className={`SingleComment ${isArticleAuthor && "SingleComment--author"}`}>
      <AuthorCard author={authorData} />
      <p>{dateService.formatDateTime(created_at)}</p>
      <p>{body}</p>
      <p>{votes}</p>
    </article>
  );
}

export default Comments;
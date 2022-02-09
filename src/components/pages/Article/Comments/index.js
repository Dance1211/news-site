import * as dateService from "../../../../utils/date";
import useArticleComments from "../../../../hooks/CommentsByArticle";
import useUserById from "../../../../hooks/UserById";
import { AuthorCard } from "../../../AuthorCard";
import './styles.css';
import Vote from "../../../Vote";
import { voteCommentById } from "../../../../utils/api";
import PostComment from "./PostComment";


function Comments({ author, article_id }) {
  const [comments, setComments] = useArticleComments(article_id)
  return (
    <section id="comments" className="Comments">
      <h2>Comments ({comments.length})</h2>
      <PostComment/>
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
  const { comment_id, author, body, created_at, votes } = commentData;
  const [authorData] = useUserById(author);
  return (
    <article className={`SingleComment ${isArticleAuthor && "SingleComment--author"}`}>
      <AuthorCard author={authorData} />
      <p>{dateService.formatDateTime(created_at)}</p>
      <p>{body}</p>
      <Vote
        voteNum={votes}
        onVoteUpPress={() => voteCommentById(comment_id, 1)}
        onVoteDownPress={() => voteCommentById(comment_id, -1)}
      />
    </article>
  );
}

export default Comments;
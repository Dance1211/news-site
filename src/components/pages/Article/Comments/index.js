import { useContext } from "react";

import UserContext from "@context/User";
import { voteCommentById, deleteComment } from "@utils/api";
import * as dateService from "@utils/date";
import useArticleComments from "@hooks/CommentsByArticle";
import useUserById from "@hooks/UserById";
import Vote from "@components/Vote";
import { AuthorCard } from "@components/AuthorCard";
import PostComment from "./PostComment";

import './styles.css';


function Comments({ author, article_id }) {
  const { user } = useContext(UserContext)
  const [comments, setComments] = useArticleComments(article_id)
  return (
    <section id="comments" className="Comments">
      <h2>Comments ({comments.length})</h2>
      <PostComment article_id={article_id} setComments={setComments} />
      {comments.map((commentData) => {
        return (
          <SingleComment
            key={commentData.comment_id}
            commentData={commentData}
            setComments={setComments}
            isUser={commentData.author === user.username}
            isArticleAuthor={commentData.author === author}
          />
        )
      })}
    </section>
  );
}

function SingleComment({ setComments, commentData, isArticleAuthor, isUser }) {
  const { comment_id, author, body, created_at, votes } = commentData;
  const [authorData] = useUserById(author);

  const handleDeleteComment = () => {
    deleteComment(comment_id);
    setComments((currComments) => currComments.filter((comment) => comment.comment_id !== comment_id));
  }

  return (
    <article className={`SingleComment ${isArticleAuthor && "SingleComment--isAuthor"}`}>
      <AuthorCard author={authorData} />
      <p className="SingleComment__date">{dateService.formatDateTime(created_at)}</p>
      <p className="SingleComment__body">{body}</p>
      <Vote
        voteNum={votes}
        onVoteUpPress={() => voteCommentById(comment_id, 1)}
        onVoteDownPress={() => voteCommentById(comment_id, -1)}
      />
      {isUser && <button className="SingleComment__delete" onClick={handleDeleteComment}>Delete</button>}
    </article>
  );
}

export default Comments;
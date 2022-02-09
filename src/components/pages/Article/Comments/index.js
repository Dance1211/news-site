import { useContext } from "react";

import UserContext from "@context/User";
import { voteCommentById } from "@utils/api";
import * as dateService from "@utils/date";
import useArticleComments from "@hooks/CommentsByArticle";
import useUserById from "@hooks/UserById";
import Vote from "@components/Vote";
import { AuthorCard } from "@components/AuthorCard";
import PostComment from "./PostComment";

import './styles.css';


function Comments({ author, article_id }) {
  const {user} = useContext(UserContext)
  const [comments, setComments] = useArticleComments(article_id)
  return (
    <section id="comments" className="Comments">
      <h2>Comments ({comments.length})</h2>
      <PostComment article_id={article_id} setComments={setComments}/>
      {comments.map((commentData) => {
        return (
          <SingleComment
            isUser={commentData.author === user.username}
            isArticleAuthor={commentData.author === author}
            key={commentData.comment_id}
            commentData={commentData}
          />
        )
      })}
    </section>
  );
}

function SingleComment({ commentData, isArticleAuthor, isUser }) {
  const { comment_id, author, body, created_at, votes } = commentData;
  const [authorData] = useUserById(author);
  return (
    <article className={`SingleComment ${isArticleAuthor && "SingleComment--author"}`}>
      <AuthorCard author={authorData} />
      <p>{dateService.formatDateTime(created_at)}</p>
      {isUser && <p>USER!</p>}
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
import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/api";

function useArticleComments(article_id) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsById(article_id)
      .then((commentsData) => {
        setComments(() => {
          return commentsData;
        })
      })
  }, [article_id]);

  return [comments, setComments];
}

export default useArticleComments;
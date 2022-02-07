import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils/api";

function useArticleById(article_id) {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleData) => {
        setArticle(() => articleData);
      })
      .catch((err) => {
        setError(err);
      })
  }, [article_id]);

  return [article, error];
}

export default useArticleById;
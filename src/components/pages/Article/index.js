import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleById from "../../../hooks/ArticleById";
import Error from "../../Error";
import Body from "./Body";
import Comments from "./Comments";
import './styles.css';

function Article() {
  const { article_id } = useParams();
  const [article, loadingError] = useArticleById(article_id);

  useEffect(() => {
  }, [article])

  if (loadingError) {
    const { status, statusText, data: { msg } } = loadingError.response;
    return <Error status={status} statusText={statusText} msg={msg} />
  }

  if (!article) {
    return <h1>ARTICLE LOADING</h1>;
  }

  return (
    <main className="Article">
      <Body article={article} />
      <Comments article_id={article_id} author={article?.author} />
    </main>
  );
}

export default Article;
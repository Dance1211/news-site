import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleById from "@hooks/ArticleById";
import Error from "@components/Error";
import TopLayerBody from "@components/TopLayerBody";
import Body from "./Body";
import Comments from "./Comments";
import './styles.css';

function SingleArticle() {
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
      <TopLayerBody>
        <Body article={article} />
      </TopLayerBody>
      <TopLayerBody>
        <Comments article_id={article_id} author={article?.author} />
      </TopLayerBody>
    </main>
  );
}

export default SingleArticle;
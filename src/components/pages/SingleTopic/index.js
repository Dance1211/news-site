import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "@utils/api";
import Articles from "@components/Articles";
import SelectPage from "@components/SelectPage";
import TopLayerBody from "@components/TopLayerBody";
import './styles.css';
import ArticleSort from "../../ArticleSort";

function Topic() {
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    // Get the articles
    if (slug) {
      setIsLoading(true);
      getArticles({
        sort_by: sortBy,
        order: order,
        topic: slug,
        p: page
      })
        .then((newArticles) => {
          setArticles(() => newArticles);
          setIsLoading(false);
        })
    }
  }, [slug, page, sortBy, order])

  return (
    <main className="SingleTopic">
      <TopLayerBody>
        <h2 className="SingleTopic__heading">{slug}</h2>
        <ArticleSort setSortBy={setSortBy} setOrder={setOrder}/>
        <Articles
          articles={articles}
          setArticles={setArticles}
          isLoading={isLoading}
        />
        <SelectPage page={page} setPage={setPage} isArticlesLoading={isLoading} />
      </TopLayerBody>
    </main>
  );
}

export default Topic;
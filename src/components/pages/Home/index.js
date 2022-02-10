import { useEffect, useState } from "react";
import { getArticles } from "@utils/api";
// import TopLayerBody from "@components/TopLayerBody";
// import ArticlePreview from "@components/ArticlePreview";
import SelectPage from "@components/SelectPage";
import './styles.css';
import Articles from "../../Articles";

function Home() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ sort_by: 'created_at', order: 'desc', p: page })
      .then((latestArticles) => {
        setArticles(latestArticles);
      })
  }, [page]);

  return (
    <main className="Home">
      <Articles articles={articles} setArticles={setArticles}/>
      <SelectPage page={page} setPage={setPage}/>
    </main>
  );
}

export default Home;
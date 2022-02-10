import { useEffect, useState } from "react";
import { getArticles } from "@utils/api";
import TopLayerBody from "@components/TopLayerBody";
import SelectPage from "@components/SelectPage";
import './styles.css';
import Articles from "../../Articles";

function Home() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles({ sort_by: 'created_at', order: 'desc', limit: 5, p: page})
      .then((latestArticles) => {
        setArticles(() => latestArticles);
      })
      .catch((err) => {
        alert("Error getting messages)");
      })
      .then(() => {
        setIsLoading(false);
      })
  }, [page]);

  return (
    <main className="Home">
      <TopLayerBody>
        <h2 className="Home__heading">Latest Articles</h2>
        <Articles articles={articles} setArticles={setArticles} />
        <SelectPage page={page} setPage={setPage} isArticlesLoading={false}/>
      </TopLayerBody>
    </main>
  );
}

export default Home;
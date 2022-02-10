import { useEffect, useState } from "react";
import { getArticles } from "@utils/api";
import TopLayerBody from "@components/TopLayerBody";
import ArticlePreview from "@components/ArticlePreview";
import SelectPage from "@components/SelectPage";
import './styles.css';

function Home() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ sort_by: 'created_at', order: 'desc', p: page})
      .then((latestArticles) => {
        setArticles(latestArticles);
      })
  }, [page]);

  return (
    <main>
      <section className="Home__articles">
        {articles.map((article, index) => {
          return (
            <TopLayerBody key={article.article_id}>
              <ArticlePreview article={article} setArticles={setArticles} index={index}/>
            </TopLayerBody>
          )
        })}
        <SelectPage page={page} setPage={setPage}/>
      </section>
    </main>
  );
}

export default Home;
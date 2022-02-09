import { useEffect, useState } from "react";
import { getArticles } from "../../../utils/api";
import ArticlePreview from "../../ArticlePreview";
import TopLayerBody from "../../TopLayerBody";
import './styles.css';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ sort_by: 'created_at', order: 'desc' })
      .then((latestArticles) => {
        setArticles(latestArticles);
      })
  }, []);

  return (
    <main>
      <section className="Home_articles">
        {articles.map((article, index) => {
          return (
            <TopLayerBody key={article.article_id}>
              <ArticlePreview article={article} setArticles={setArticles} index={index}/>
            </TopLayerBody>
          )
        })}
      </section>
    </main>
  );
}

export default Home;
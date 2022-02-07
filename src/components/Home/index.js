import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api";
import ArticlePreview from "../ArticlePreview";
import './style.css';

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
          return <ArticlePreview key={index} article={article} />
        })}
      </section>
    </main>
  );
}

export default Home;
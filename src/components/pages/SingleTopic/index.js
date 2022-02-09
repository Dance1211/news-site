import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../../utils/api";
import TopLayerBody from "../../TopLayerBody";
import ArticlePreview from "../../ArticlePreview";
import './styles.css';

function Topic() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (slug) {
      getArticles({
        sort_by: "created_at",
        order: "desc",
        topic: slug
      })
        .then((newArticles) => {
          setArticles(() => newArticles);
        })
    }
  }, [slug])

  return (
    <main>
      <h2>{slug}</h2>
      <section className="SingleTopic__articles">
        {articles.map((article, index) => {
          return (
            <TopLayerBody>
              <ArticlePreview key={index} article={article} />
            </TopLayerBody>
          )
        })}
      </section>
    </main>
  );
}

export default Topic;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "@utils/api";
import Articles from "@components/Articles";
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
      <Articles articles={articles} setArticles={setArticles}/>
    </main>
  );
}

export default Topic;
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "@utils/api";
import Articles from "@components/Articles";
import SelectPage from "@components/SelectPage";
import TopLayerBody from "@components/TopLayerBody";
import './styles.css';
import ArticleSort from "../../ArticleSort";
import Error from "@components/Error";

function Topic() {
  const { slug } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(queryParams.get('p') || 1);
  const [sortBy, setSortBy] = useState(queryParams.get('sort_by') || 'created_at');
  const [order, setOrder] = useState(queryParams.get('order') || 'desc');
  const [error, setError] = useState(null);

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
          setQueryParams({ page, sort_by: sortBy, order })
          setArticles(() => newArticles);
          setIsLoading(false);
        })
        .catch((err) => {
          const { data: { msg }, status, statusText } = err.response;
          setError(() => ({msg, status, statusText}));
        })
    }
  }, [slug, page, sortBy, order])

  return error
    ? <Error msg={error.msg} status={error.status} statusText={error.statusText}/>
    : (
    <main className="SingleTopic">
      <TopLayerBody>
        <h2 className="SingleTopic__heading">{slug}</h2>
        <ArticleSort setSortBy={setSortBy} setOrder={setOrder} />
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
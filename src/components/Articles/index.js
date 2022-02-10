import ArticlePreview from './ArticlePreview';
import './styles.css';

function Articles({ articles, setArticles, isLoading = false }) {
  return (
    <section className={`Articles${isLoading ? " translucent" : ""}`}>
      {articles.map((article, index) => {
        return (
          <article key={article.article_id} className="Articles__container">
            <ArticlePreview
              article={article}
              setArticles={setArticles}
              index={index}
              />
          </article>
        )
      })}
    </section>
  );
}

export default Articles;
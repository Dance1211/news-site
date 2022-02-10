import ArticlePreview from './ArticlePreview';
import TopLayerBody from '@components/TopLayerBody';
import './styles.css';

function Articles({articles, setArticles}) {
  return (
    <section className="Articles">
      {articles.map((article, index) => {
        return (
          <TopLayerBody key={article.article_id}>
            <ArticlePreview article={article} setArticles={setArticles} index={index} />
          </TopLayerBody>
        )
      })}
    </section>
  );
}

export default Articles;
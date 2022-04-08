import articlestyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";
const ArticleList = ({ articles }) => {
  return (
    <>
      <div className={articlestyles.grid}>
        {articles.map((article) => (
          <ArticleItem article={article} key={article.id} />
        ))}
      </div>
    </>
  );
};

export default ArticleList;

import Link from "next/link";
import articlestyle from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <>
      <Link href="/article/[id]" as={`/article/${article.id}`} passHref>
        <div className={articlestyle.card}>
          <h3>{article.title}&rarr;</h3>
          <p>{article.body}</p>
        </div>
      </Link>
    </>
  );
};

export default ArticleItem;

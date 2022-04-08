import ArticleList from "../components/ArticleList";
import { server } from "./config";
export default function Home({ articles }) {
  return (
    <>
      <div>
        <ArticleList articles={articles} />
      </div>
    </>
  );
}
//api klasöründeki data ile fetch
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const articles = await res.json();
  return { props: { articles } };
};

//jsonplaceholder ile fetch
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return { props: { articles } };
// };

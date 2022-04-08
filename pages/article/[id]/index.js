import { useRouter } from "next/router";
import Link from "next/Link";
import { server } from "../../config";
import Meta from "../../../components/Meta";
const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} />
      <div>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <Link href="/">Go Back</Link>
      </div>
    </>
  );
};

//her route isteğinde fetch çalışacak
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await (await res).json();
//   return { props: { article } };
// };

// tüm postların parametrelerini dinamik olarak generate edip route url'de /post/33 gibi
// normalde sayfada fetch edilmeyen dataya da ulaşılması mümkün hale gelir

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api//posts/${context.params.id}`);
  const article = await (await res).json();
  return { props: { article } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api//posts`);
  const articles = await (await res).json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};
// jsonplaceholder fetch
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await (await res).json();
//   return { props: { article } };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await (await res).json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return { paths, fallback: false };
// };

export default Article;

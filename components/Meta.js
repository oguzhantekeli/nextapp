import Head from "next/head";
//next-seo bu iş için kurulabilir
const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "default site title",
  keywords: "default site keys",
  description: "default site desc",
};

export default Meta;

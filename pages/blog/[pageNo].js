import Head from "next/head";
import Navbar from "../../components/Navbar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h4><span style={{ color: "brown" }}>ID: </span> {id}</h4>
        <h2><span style={{ color: "brown" }}>Title: </span> {title}</h2>
        <p><span style={{ color: "brown" }}>Blog: </span> {body}</p>
      </div>
    </>
  );
};

export default myData;

// What will happend if the file is already exist in our folder and we tried to call the pages dynamic route ?

// Which page will be serve by the next.js app?

// getStaticPaths defines which pages next.js has to render when exporting.
// It is used to generate all available dynamic routes.

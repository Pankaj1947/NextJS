import Navbar from "../../components/Navbar";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Navbar />
      {data.map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.id}</h3>
            <Link href={`/blog/${curElem.id}`}>
              <h2>{curElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;

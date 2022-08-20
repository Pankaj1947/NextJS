import Head from "next/head";
import Navbar from "../../components/Navbar";

const userid = ({data}) => {
  const {id,name,username,email,website,address}=data;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <div>
          <h4><span style={{ color: "brown" }}>ID: </span> {id}</h4>
          <h2><span style={{ color: "brown" }}>Name: </span> {name}</h2>
          <h4><span style={{ color: "brown" }}>Username: </span> {username}</h4>
          <h4><span style={{ color: "brown" }}>Email: </span> {email}</h4>
          <h4><span style={{ color: "brown" }}>Website: </span> {website}</h4>
          <h4><span style={{ color: "brown" }}>City: </span> {address.city}</h4>
        </div>
      </div>

    </>
  )
}

export default userid

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json();

  const paths = data.map((e) => {
    return {
      params: { userid: e.id.toString() }
    }
  })

  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps = async (context) => {
  const id=context.params.userid;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json();

  return {
    props: { data }
  }
}
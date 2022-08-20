import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <header className="header">
        <div className="brand_box">
          <Navbar />
        </div>
        <div className={styles.text_box}>
          <h1>Welcome to Dashboard</h1>
        </div>
      </header>
    </>
  )
}

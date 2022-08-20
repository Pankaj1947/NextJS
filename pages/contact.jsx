import Head from "next/head"
import Navbar from "../components/Navbar"
import styles from "../styles/contact.module.css"
import style from "../styles/index.module.css"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <Navbar />
      <div className={style.text_box}>
        <h1 className={styles.mainHeading}>Contact us</h1>
      </div>
    </>
  )
}

export default contact
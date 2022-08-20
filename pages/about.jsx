import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/about.module.css"
import Image from "next/image"
import Head from 'next/head'

const about = () => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2 className={styles.mainHeading}>About us</h2>
        <p className="about">We are a good company.</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Image src="/mypic.jpg"
            height={296}
            width={526}
            alt="" />
          <Image src="https://cdn.pixabay.com/photo/2015/08/19/15/44/seo-896175__340.png"
            height={296}
            width={526}
            alt="" />
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            color: pink;
          }
          .about {
            color: blue;
          }
        `}
      </style>
    </>
  )
}

export default about
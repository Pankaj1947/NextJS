import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'

const Users = ({ data }) => {
    return (
        <>
            <Head>
                <title>Users</title>
            </Head>
            <Navbar />
            {data.map((e) => (
                <div key={e.id} className="ssr-styles">
                    <h3>{e.id}</h3>
                    <Link href={`/users/${e.id}`}><h2>{e.name}</h2></Link>
                </div>
            ))}
        </>
    )
}

export default Users

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json();

    return {
        props: { data }
    }
}
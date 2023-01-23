import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "@/lib/posts";
import axios from "axios";
import React from "react";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const animeData = await axios.get("https://nekos.best/api/v2/hug?amount=10").then(({ data }) => data.results);

  return {
    props: { allPostsData, animeData },
  };
}

export default function Home({ allPostsData,animeData }) {
  React.useEffect(() => {
    async function loadAnimes() {
      await axios
        .get("https://nekos.best/api/v2/hug?amount=10")
        .then(({ data }) => console.log(data.results))
        .catch((err) => console.log(err))
        .then(() => console.log("I must always ru!"));
    }

    loadAnimes();

    return () => {};
  }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Just a young and excited <strong>web developer</strong> .
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
          {animeData.map(({ anime_name, url },index) => (
            <li className={utilStyles.listItem} key={index}>
              {anime_name}
              <br />
              {/* <img src={url} height={108} width={108} alt={anime_name} /> */}
              <Image 
              loader={() => url}
              priority src={'nekos.best/api/v2/hug/013.gif'} className={utilStyles.borderCircle} height={108} width={108} alt={anime_name} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

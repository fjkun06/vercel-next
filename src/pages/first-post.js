import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
       Trying to create a new blog is not at all easy.
      </h2>
    </Layout>
  );
};

export default FirstPost;

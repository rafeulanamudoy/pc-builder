import Head from "next/head";

import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import styles from "@/styles/Header.module.css";
import FeturedProducts from "@/components/UI/FeturedProducts";
import FetauredSection from "@/components/UI/FetauredSection";
export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pc-Builder</title>
        <meta name="description" content="This is a Pc Builder Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <FeturedProducts products={products} />
      <FetauredSection />
      <div>h2</div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};

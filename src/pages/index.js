import Head from "next/head";

import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pc-Builder</title>
        <meta name="description" content="This is a Pc Builder Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <div>h2</div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

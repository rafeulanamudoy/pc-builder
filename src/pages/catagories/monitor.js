import RootLayout from "@/components/Layouts/RootLayout";
import FeturedProducts from "@/components/UI/FeturedProducts";
import React from "react";

const Monitor = ({ products }) => {
  return (
    <div>
      <FeturedProducts
        products={products}
        header={"Choose Your Desired Monitor !"}
      />
    </div>
  );
};

export default Monitor;
Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       product: [],
  //     },
  //   };
  // }
  const res = await fetch(`${process.env.URL}/api/products/?category=monitor`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

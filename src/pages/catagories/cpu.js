import RootLayout from "@/components/Layouts/RootLayout";
import FeturedProducts from "@/components/UI/FeturedProducts";
import React from "react";

const Cpu = ({ products }) => {
  return (
    <div>
      <FeturedProducts
        products={products}
        header={"Choose Your Desired Cpu !"}
      />
    </div>
  );
};

Cpu.getLayout = function getLayout(page) {
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
  const res = await fetch(`${process.env.URL}/api/products/?category=cpu`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

export default Cpu;

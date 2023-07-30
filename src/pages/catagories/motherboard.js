import RootLayout from "@/components/Layouts/RootLayout";
import FeturedProducts from "@/components/UI/FeturedProducts";

const MotherBoard = ({ products }) => {
  return (
    <div>
      <FeturedProducts
        products={products}
        header={"Choose Your Desired Mohterboard !"}
      />
    </div>
  );
};

export default MotherBoard;
MotherBoard.getLayout = function getLayout(page) {
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
  const res = await fetch(
    `${process.env.URL}/api/products/?category=motherboard`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

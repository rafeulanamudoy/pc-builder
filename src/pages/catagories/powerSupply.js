import RootLayout from "@/components/Layouts/RootLayout";
import FeturedProducts from "@/components/UI/FeturedProducts";

const PowerSupply = ({ products }) => {
  return (
    <div>
      <FeturedProducts
        products={products}
        header={"Choose Your Desired Power Supply Unit !"}
      />
      ;
    </div>
  );
};

export default PowerSupply;
PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.URL}/api/products/?category=powerSupplyUnit`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};

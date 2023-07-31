import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import styles from "@/styles/productDetails.module.css";
import { Image } from "antd";
const ProductDetails = ({ product }) => {
  return (
    <div>
      <h1 className={styles.productHeader}>Product Description</h1>
      <div className={styles.productContainer}>
        <Image
          style={{
            height: "20vw",
            width: "20vh",
          }}
          src={product?.Image}
          alt="productImage"
        />

        <div>
          <h1>{product?.Product_Name}</h1>
          <div className={styles.productDesc}>
            <span>Price:{product?.Price}$</span>
            <span>Status:{product?.Status}</span>
            <span>Category:{product?.Category}</span>
            <span>Rating:{product?.AverageRating}</span>
          </div>
          <h1 className={styles.featureHeader}>Key Features</h1>
          {product?.KeyFeatures?.map((feature) => {
            const key = Object.keys(feature)[0];
            const value = feature[key];

            return (
              <div
                className={styles.feature}
                key={Math.floor(Math.random() * 1000)}
              >
                {key}:{value}
              </div>
            );
          })}
          <div>
            <span className={styles.description}>Description</span>:
            <span>{product?.Description}</span>
          </div>
          <div>
            <h1>Individual Product Rating</h1>
            {Object.keys(product?.IndividualRatings).map((property) => {
              const value = product?.IndividualRatings[property];

              return (
                <div
                  className={styles.individualRating}
                  key={Math.floor(Math.random() * 1000)}
                >
                  {property}:{value}
                </div>
              );
            })}
          </div>
          <h1 className={styles.featureHeader}>User Reveiw</h1>
          {product?.Reviews?.map((reveiw) => {
            return (
              <div
                className={styles.feature}
                key={Math.floor(Math.random() * 1000)}
              >
                <div className={styles.userReveiw}>
                  <h3>{reveiw?.user}</h3>
                  <h5>{reveiw?.comment}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getStaticPaths() {
  const res = await fetch(`${process.env.URL}/api/products`);
  const data = await res.json();

  const paths = data?.data?.map((product) => ({
    params: { productId: product?._id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.URL}/api/products/?productId=${params?.productId}`
  ); // Remove the extra double quotes
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
    revalidate: 10,
  };
};

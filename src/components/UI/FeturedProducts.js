import React from "react";
import { Card, Col, Image, Row } from "antd";
import styles from "@/styles/featured.module.css";
const FeturedProducts = ({ products }) => {
  console.log(products);

  console.log(products);
  return (
    <div>
      <h1 className={styles.feturedProducts}>Fetured Products</h1>
      <div className={styles.grid_container}>
        {products.map((product) => {
          return (
            <div className={styles.grid_items} key={product._id}>
              <Image
                alt="product_image"
                src={product.Image}
                style={{
                  height: "300px",
                }}
              />
              <h3 className={styles.product_desc}>
                Product Name:<span> {product.Product_Name}</span>
              </h3>
              <h3 className={styles.product_desc}>
                Catagory:<span> {product.Category}</span>
              </h3>
              <h3 className={styles.product_desc}>
                Price:<span> {product.Price}</span>
              </h3>
              <h3 className={styles.product_desc}>
                Status:<span> {product.Status}</span>
              </h3>

              <h3 className={styles.product_desc}>
                Rating:<span> {product.Rating}</span>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeturedProducts;

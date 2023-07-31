import React from "react";
import { Button, Image } from "antd";
import styles from "@/styles/featured.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getProduct } from "@/redux/features/productSlice";
const FeturedProducts = (props) => {
  const router = useRouter();
  const {
    query: { message },
  } = router;

  const { products, header } = props;
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(getProduct(product));
    router.push("/pcBuilder");
  };

  return (
    <div>
      <h1 className={styles.feturedProducts}>{header}</h1>
      <div className={styles.grid_container}>
        {products?.map((product) => {
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
                Product Name:<span> {product?.Product_Name}</span>
              </h3>
              <h3 className={styles.product_desc}>
                Catagory:<span> {product?.Category}</span>
              </h3>
              <h3 className={styles.product_desc}>
                Price:<span> {product?.Price}$</span>
              </h3>
              <h3 className={styles.product_desc}>
                Status:<span> {product?.Status}</span>
              </h3>

              <h3 className={styles.product_desc}>
                Rating:<span> {product?.AverageRating}</span>
              </h3>

              {message === "pcBuilder" ? (
                <Button onClick={() => handleAdd(product)}>
                  Add To Builder
                </Button>
              ) : (
                <Link
                  href={`/productDetails/${product?._id}`}
                  className={styles.productButton}
                >
                  Details
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeturedProducts;

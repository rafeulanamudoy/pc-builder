import RootLayout from "@/components/Layouts/RootLayout";
import React, { useEffect, useState } from "react";
import styles from "@/styles/pcBuilder.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const state = useSelector((state) => state.product.product);
  const { cpu, monitor, motherboard, powerSupply, ram, storage } = state;
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      Object.keys(cpu).length &&
      Object.keys(monitor).length &&
      Object.keys(motherboard).length &&
      Object.keys(powerSupply).length &&
      Object.keys(ram).length &&
      Object.keys(storage).length
    ) {
      setDisable(false);
    }
  }, [cpu, monitor, motherboard, powerSupply, ram, storage]);
  const handlecomplete = () => {
    alert("successfully build");
  };
  return (
    <div className={styles.pcContainer}>
      <div className={styles.items}>
        <h3>Cpu </h3>

        <Link href={"/catagories/cpu/?message=pcBuilder"}>choose</Link>
        <span>{cpu?.Product_Name}</span>
      </div>
      <div className={styles.items}>
        <h3>Monitor</h3>
        <Link href={"/catagories/monitor?message=pcBuilder"}>choose</Link>
        <span>{monitor?.Product_Name}</span>
      </div>
      <div className={styles.items}>
        <h3>Motherboard</h3>
        <Link href={"/catagories/motherboard?message=pcBuilder"}>choose</Link>
        <span>{motherboard?.Product_Name}</span>
      </div>
      <div className={styles.items}>
        <h3>Storage</h3>
        <Link href={"/catagories/storage?message=pcBuilder"}>choose</Link>
        <span>{storage?.Product_Name}</span>
      </div>
      <div className={styles.items}>
        <h3>Ram</h3>
        <Link href={"/catagories/ram?message=pcBuilder"}>choose</Link>
        <span>{ram?.Product_Name}</span>
      </div>
      <div className={styles.items}>
        <h3>Power Supply Unit</h3>
        <Link href={"/catagories/powerSupply?message=pcBuilder"}>choose</Link>
        <span>{powerSupply?.Product_Name}</span>
      </div>

      <button
        onClick={() => handlecomplete()}
        className={styles.completeButton}
        disabled={disable}
      >
        Complete Build
      </button>
    </div>
  );
};

export default PcBuilder;
PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

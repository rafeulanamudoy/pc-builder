import React from "react";
import styles from "@/styles/featured.module.css";
import { Image } from "antd";
import Link from "next/link";

const FetauredSection = () => {
  return (
    <>
      <h1 className={styles.feturedProducts}>Featured Category</h1>
      <div className={styles.grid_catgory_container}>
        <Link className={styles.grid_items} href={"/catagories/monitor"}>
          <Image
            src="https://i.ibb.co/7rn4X56/web-analytics.png"
            alt="monitor"
          />
          <h3>Monitor</h3>
        </Link>
        <Link className={styles.grid_items} href={"/catagories/storage"}>
          <Image src="https://i.ibb.co/BNRH0NS/storage.png" alt="storege" />
          <h3>Storege</h3>
        </Link>
        <Link href={"/catagories/ram"}>
          <Image src="https://i.ibb.co/ZBYzshj/ram-memory.png" alt="ram" />
          <h3>Ram</h3>
        </Link>
        <Link className={styles.grid_items} href={"/catagories/powerSupply"}>
          <Image
            src="https://i.ibb.co/N2TdvNC/power-supply-1.png"
            alt="power_supply"
          />
          <h3>Power Supply</h3>
        </Link>
        <Link className={styles.grid_items} href={"/catagories/mohterboard"}>
          <Image
            src="https://i.ibb.co/CBP30jm/motherboard.png"
            alt="motherboard"
          />
          <h3>MotherBoard</h3>
        </Link>
        <Link className={styles.grid_items} href={"/catagories/cpu"}>
          <Image src="https://i.ibb.co/6NdR8zJ/cpu.png" alt="cpu" />
          <h3>Cpu</h3>
        </Link>
      </div>
    </>
  );
};

export default FetauredSection;

// <div className={styles.grid_items}></div>
// <div className={styles.grid_items}></div>
// <div className={styles.grid_items}></div>
// <div className={styles.grid_items}></div>
// <div className={styles.grid_items}></div>

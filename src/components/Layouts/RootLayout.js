import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <Layout className={styles.header_container}>
      <Header className={styles.navbar}>
        <div className={styles.logo_container}>
          <Link className={styles.logo} href="/">
            tech beats
          </Link>
        </div>
        <div className={styles.mobilemenu}>
          <Button
            type="primary"
            shape="circle"
            icon={<MenuOutlined />}
            onClick={handleMobileMenuToggle}
          />
        </div>

        {showMobileMenu && (
          <div
            theme="dark"
            // mode={showMobileMenu ? "vertical" : "horizontal"}
            mode={"vertical"}
            className={styles.menu_items}
          >
            <Link href="/">
              <div>Home</div>
            </Link>
            <Link href="/register">
              <div>Register</div>
            </Link>
            <Link href="/login">
              <div>Login</div>
            </Link>
            <div className={styles.dropdown}>
              <Link href="#">
                <div>Catagories</div>
              </Link>
              <ul className={styles.dropdown_content}>
                <Link href={"/catagories/cpu"}>Cpu</Link>
                <Link href={"/catagories/motherboard"}>Motherboard</Link>
                <Link href={"/catagories/powerSupply"}>Power Supply Unit</Link>
                <Link href={"/catagories/storage"}>Storage Device</Link>
                <Link href={"/catagories/monitor"}>Monitor</Link>
                <Link href={"/catagories/others"}>Others</Link>
              </ul>
            </div>
          </div>
        )}

        <div>
          <Link href="/pcBuilder">
            <Button className={styles.button}>Pc Builder</Button>
          </Link>
        </div>
      </Header>

      <Content
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};
export default RootLayout;

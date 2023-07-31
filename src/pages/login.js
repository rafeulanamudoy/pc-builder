import RootLayout from "@/components/Layouts/RootLayout";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import React from "react";
import styles from "@/styles/login.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginHeader}> Please Login</h1>
      <div className={styles.socialLogin}>
        <div>
          <GithubOutlined
            style={{
              fontSize: "35px",
            }}
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
        </div>
        <div>
          <GoogleOutlined
            style={{
              fontSize: "35px",
            }}
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

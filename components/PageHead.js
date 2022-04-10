import React from "react";
import Head from "next/head";

const PageHead = ({ route }) => {
  const getTitle = () => {
    switch (route) {
      case "/":
        return "Home";
      case "/experience":
        return "Experience";
      case "/projects":
        return "Projects";
      case "/certificates":
        return "Certificates";
      default:
        return "Developer";
    }
  };

  return (
    <div>
      <Head>
        <title>{`MikePodo | ${getTitle()}`}</title>
      </Head>
    </div>
  );
};

export default PageHead;

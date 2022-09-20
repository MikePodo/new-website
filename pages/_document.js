import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="Michael Podolsky | React HTML CSS Software Engineer"
        />
        <meta
          property="og:title"
          content="Michael Podolsky | Software Engineer"
        />
        <meta
          property="og:description"
          content="Michael Podolsky | React HTML CSS Sofrware Engineer"
        />
        <meta property="og:url" content="https://mikepodo.net/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

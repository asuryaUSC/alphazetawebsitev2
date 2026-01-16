// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-manrope">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

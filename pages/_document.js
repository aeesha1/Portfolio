import Document, { Html, Head, Main, NextScript } from "next/document";
import { GiAstronautHelmet } from "react-icons/gi";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/assets/astrochill.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Noto+Serif+Khojki&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script>AOS.init();</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

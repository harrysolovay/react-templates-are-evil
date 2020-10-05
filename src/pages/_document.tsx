import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

type GetInitialProps = typeof Document.getInitialProps;

export default class Doc extends Document {
  static getInitialProps: GetInitialProps = async (ctx) => {
    return Document.getInitialProps(ctx);
  };

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
          <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

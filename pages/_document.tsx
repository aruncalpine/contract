import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { FC } from 'react';

const Document: FC = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <script defer data-domain="contractregistry.io" src="/scripts/plausibleScript.js"></script>
        <Script strategy="beforeInteractive" src="/scripts/constantContact.js"></Script>
        <script
          id="signupScript"
          src="//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
          async
          defer
        ></script>
        <NextScript />
        <link rel="preload" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </body>
    </Html>
  );
};

export default Document;

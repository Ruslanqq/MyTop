import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }:AppProps):JSX.Element {
  return <>
   <Head>
    <title>My-top</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
    </Head>
  <Component {...pageProps} />
  </>;
}

export default MyApp;

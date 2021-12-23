/** @format */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Sanity Playground</title>
      </Head>
      <main>
        <Navbar />

        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
}

export default MyApp;

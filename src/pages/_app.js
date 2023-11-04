import "@/styles/globals.scss";
import Layout from "@/style-guide/page-components/Layout";
import Head from "next/head";

// umcomment to use cfour font
// import localFont from "next/font/local";
// const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/cfour/Cfour.otf",
//       weight: "400",
//     },
//   ],
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Professional Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for all"
        />
        <meta
          name="keywords"
          content="portfolio, web dev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5f5eaa" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>
      </Head>
      {/* <style jsx global>{`
        * {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

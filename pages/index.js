import Head from "next/head";
import Main from "../components/Main";
import Projects from "../components/Projects";

export default function Home() {

  return (
    <>
        <Head>
          <title>AbneRibeiro</title>
          <meta
            name="description"
            content="Discover actionable insights and unlock the full potential of your data with Data Analysis Hub. We provide cutting-edge tools and expertise to analyze, visualize, and interpret complex data sets."
          />
          <meta property="og:image" content='/images/ab.png' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Main />
      <Projects />
    </>
  );
}


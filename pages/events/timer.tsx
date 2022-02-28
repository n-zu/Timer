import Head from "next/head";
import Layout from "../../inc/components/Layout/Layout";
import Timer from "../../inc/components/Timer/Timer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Timer</title>
        <meta name="description" content="Time events" />
      </Head>
      <Timer />
    </Layout>
  );
}

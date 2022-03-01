import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Timer from "../../components/Timer/Timer";

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

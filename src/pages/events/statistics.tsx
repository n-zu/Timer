import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import EventStatistics from "../../components/EventStatistics/EventStatistics";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Events Statistics</title>
        <meta name="description" content="Time events" />
      </Head>
      <EventStatistics />
    </Layout>
  );
}

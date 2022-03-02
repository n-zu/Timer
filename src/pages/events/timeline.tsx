import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import EventTimeline from "../../components/EventTimeline/EventTimeline";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Events Timeline</title>
        <meta name="description" content="See Event Timeline" />
      </Head>
      <EventTimeline />
    </Layout>
  );
}

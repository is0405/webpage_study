import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import { Faculty, Bachelor, Master } from "../components/people";
import Divider from "../components/divider";

export default function People() {
  return (
    <Page>
      <Head>
        <title>Playfulな人</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <About name="Playfulな人">
          <p>研究室のメンバーを紹介します。</p>
        </About>

        <Divider>教員</Divider>
        <Faculty />

        <Divider>博士前期課程</Divider>
        <Master />
        <Divider>学部</Divider>
        <Bachelor />
      </main>
    </Page>
  );
}

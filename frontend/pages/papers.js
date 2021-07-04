import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
// import Faculty from '../components/faculty'
// import Divider from '../components/divider'

export default function Papers() {
  return (
    <Page>
      <Head>
        <title>発表文献</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <About name="発表文献">
          <p>近日公開予定</p>
        </About>
      </main>
    </Page>
  );
}

/*
{
  "id":,
  "projectId":[],
  "type":"",
  "title":"",
  "tags":[],
  "keywords":[],
  "abstract":"",
  "authors":[
    {"name":"", peopleId:""},
    {"name":"", peopleId:""},
    {"name":"", peopleId:""}
  ],
  "year":"",
  "booktitle":"",
  "pages" :"",
  "series" = "ITS '15",
  "isbn" = "9781450338998"
  "publisher" :"Association for Computing Machinery", 
  "address" :"New York, NY, USA", 
  "doi" : "10.1145/2817721.2823496",
}
*/

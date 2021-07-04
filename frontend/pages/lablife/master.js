import Page from "../../components/page";
import Head from "next/head";
import {
  AcademicCapIcon,
  ChatAlt2Icon,
  ThumbUpIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
const faqs = [
  {
    question: "どのような研究をしていますか?",
    answer:
      "学部では路面描画の研究をしていました．路面描画とは，歩行者の警告やナビゲーション情報など，安全運転に役立つ情報を道路環境中に表示する技術のことです．「路面描画によってドライバの視線がどのように動くか」などを研究していました．修士ではペットロボットについて，どうしたらペットロボットが使い続けられるようになるか？ペットロボットが人と触れ合う適切なタイミングはいつか？を研究する予定です．",
  },
  {
    question: "どのような観点から研究室を選びましたか?",
    answer:
      "研究室の雰囲気を見て決めました．わからないことを相談しやすい環境か？を重視しました．",
  },
  {
    question: "アルバイトをしていたらどんなことをしているか教えてください",
    answer:
      "現在はしていませんが，学部時代に飲食でバイトをしていました．学業・習い事・サークルとの両立が厳しくなってきたので，1年半くらいでやめてしまいました．",
  },
  {
    question: "研究室で楽しいと思えることを教えてください",
    answer:
      "休憩の時に，研究室内にいる人と話すときが楽しいです．研究のことでも研究以外のことでも気軽に相談できるので感謝しています．後は，実験結果が順調に出ている時はとても楽しいです．ニコニコです．",
  },
  {
    question: "研究室でつらいなーと思うことを教えてください",
    answer:
      "実験をするときに，なにかトラブルがあると冷や冷やします．あとは，文章を書くのが苦手なので論文を書くときはしんどいなーと思います．この研究室特有のつらい出来事はとくに思いあたらないです．",
  },
  {
    question: "研究室の教員に対する印象を教えてください",
    answer:
      "相談や指導の時間をたくさん取ってもらえて相談しやすいです．やりたいこと・考えていること・意見を尊重して頂いていて，対等（な立場ではないのですが）に扱ってくれているなと感じます．あとはお茶目だなと思います．",
  },
  {
    question: "最後に3回生に向けて、なにか一言お願いします",
    answer:
      "研究室を選ぶ基準や価値観は様々だと思うので，いろいろな人の話を聞いて選ぶのがいいと思います．後悔しないように，ちょっとでも気になったことは質問して，研究室選びの材料にしてください！私の個人的な研究室のアピールポイントは，研究の議論や相談がしやすいことや雰囲気がおちつくことです．",
  },
];

export default function Master() {
  return (
    <Page>
      <Head>
        <title>プレイフルインタラクション研究室の1日</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  プレイフルインタラクション研究室の1日
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  ある修士学生の場合
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <Image
                        className="rounded-lg shadow-lg object-cover object-center"
                        src="/images/lablife/schedulem.png"
                        alt="Whitney leaning against a railing on a downtown street"
                        width={600}
                        height={600}
                      />
                    </div>
                    <Timetable />
                  </figure>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <h3 className="py-3 mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                    答える人
                  </h3>
                  <Student />
                </div>
                <div className="py-6 mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-12">
                      {faqs.map((faq) => (
                        <div key={faq.question}>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            {faq.question}
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {faq.answer}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}

export function Student() {
  return (
    <div className="flex-shrink-0 group block">
      <div className="flex items-center">
        <div>
          <Image
            className="inline-block h-16 w-16 rounded-full"
            src="/images/lovotyamaguchi.png"
            width="100"
            height="100"
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
            山口 遊
          </p>
          <p className="text-l font-medium text-gray-500 group-hover:text-gray-700">
            修士1回生
          </p>
        </div>
      </div>
    </div>
  );
}

const timeline = [
  {
    id: 1,
    content: "研究室 入室",
    starttime: "9:00",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "オンラインの講義（気分や天気で自宅か大学か決める）",
    starttime: "9:00",
    endtime: "12:15",
    icon: BookOpenIcon,
    iconBackground: "bg-red-400",
  },
  {
    id: 3,
    content: "昼食（大学の場合は，ミーティングスペースで誰かと食べるかも）",
    starttime: "12:15",
    endtime: "13:00",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "研究や授業の課題",
    starttime: "13:00",
    endtime: "14:00",
    icon: AcademicCapIcon,
    iconBackground: "bg-red-400",
  },
  {
    id: 5,
    content: "岡藤先生とミーティング",
    starttime: "14:00",
    endtime: "15:00",
    icon: ChatAlt2Icon,
    iconBackground: "bg-yellow-500",
  },
  {
    id: 6,
    content: "途中でおやつタイム挟みながら研究（この時間に相談とか雑談多い）",
    starttime: "15:00",
    endtime: "18:00",
    icon: AcademicCapIcon,
    iconBackground: "bg-red-400",
  },
  {
    id: 7,
    content: "研究して，きりが良くなったタイミングで帰る",
    starttime: "18:00",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Timetable() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    {event.endtime ? (
                      <>
                        <time dateTime={event.statetime}>
                          {event.starttime}
                        </time>{" "}
                        –<time dateTime={event.endtime}>{event.endtime}</time>
                      </>
                    ) : (
                      <time dateTime={event.starttime}>{event.starttime}</time>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Divider from "./divider";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "ゼミはどのようにやるのですか",
    answer:
      "週1回90分のゼミがあります。学士課程の場合毎回1人5分程度の報告を行ってもらいます。博士前期課程では、1人30分程度の報告と議論を行ってもらいます。オンラインツールを併用することで、教員のみならず学生同士でも活発に議論をしています。",
  },
  {
    id: 2,
    question: "ゼミ以外ではどのような指導がありますか",
    answer:
      "教員との個別ミーティングが中心です。ここでは必要に応じて10分程度から1時間を超える議論をします。また、ワークショップ形式での任意参加型のゼミがあります。他の研究機関の研究者との勉強会も実施しています。",
  },
  {
    id: 3,
    question: "コアタイムはありますか",
    answer:
      "コアタイムはありません。しかし、教員と、また、学生同士が関わりあう機会は重要だと考えています。研究室をオンライン・オフライン問わず学生が出てきたくなる場にしていきたいと考えます。",
  },
  {
    id: 4,
    question: "研究（卒論）テーマはどのように決まりますか？",
    answer:
      "配属後、教員と相談の上、4年生の4月程度までに学生が主体的にテーマを決定するのが好ましいと考えています。とはいえ、研究テーマを考えるのは難しいので、教員が学生の興味関心を聞いた上で、研究テーマと進め方を設定することや、既存のテーマを引き継ぐことがあります。",
  },
  {
    id: 5,
    question: "学部生の場合、どのような研究生活ですか？",
    answer:
      "研究ガチ勢とそうでない人によって大きく異なると思いますが、B4の渡邊さんの例を示しました。この回答をクリックしてください。",
    href: "/lablife/bachelor",
  },
  {
    id: 6,
    question: "修士の場合、どのような研究生活ですか？",
    answer:
      "こちらも研究ガチ勢とそうでない人によって大きく異なると思います。M1の山口さんの例を示しました。この回答をクリックしてください。",
    href: "/lablife/master",
  },
  {
    id: 7,
    question: "就活したいんですけど",
    answer: "どうぞっ！",
  },
];

export default function Faq() {
  return (
    <>
      <Divider>疑問と回答</Divider>
      <div className="mt-4 px-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-lg leading-6 font-medium text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {faq.href ? (
                  <Link href={faq.href}>{faq.answer}</Link>
                ) : (
                  <>{faq.answer}</>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

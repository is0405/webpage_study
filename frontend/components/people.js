import { MailIcon, HomeIcon } from "@heroicons/react/solid";
import { version } from "react-dom";
import Image from "next/image";

const faculties = [
  {
    name: "松村 耕平",
    title: "准教授",
    role: "faculties",
    email: "matsumur@fc.ritsumei.ac.jp",
    website: "https://research-db.ritsumei.ac.jp/rithp/k03/resid/S001223",
    imageUrl: "/images/matsumura.jpg",
  },
  {
    name: "岡藤 勇希",
    title: "助教",
    role: "faculties",
    email: "yokafuji@fc.ritsumei.ac.jp",
    website: "https://yukiokafuji.mystrikingly.com",
    imageUrl: "/images/okafuji.jpg",
  },
];

const postgraduate = [
  {
    name: "川上 雄大",
    id: "1",
    theme: "",
    imageUrl: "",
  },
  {
    name: "西村 拓海",
    id: "2",
    theme: "",
    imageUrl: "",
  },
  {
    name: "Zhang Chenkai",
    id: "3",
    theme: "",
    imageUrl: "",
  },
  {
    name: "Liu Jiang",
    id: "4",
    theme: "",
    imageUrl: "",
  },
  {
    name: "浮田 凌佑",
    id: "5",
    theme: "",
    imageUrl: "",
  },
  {
    name: "山本 聖",
    id: "6",
    theme: "",
    imageUrl: "/images/yamamoto.jpg",
  },
  {
    name: "江見 太一朗",
    id: "7",
    theme: "",
    imageUrl: "",
  },
  {
    name: "Xie Zhiyan",
    id: "8",
    theme: "",
    imageUrl: "",
  },
  {
    name: "天田 穣一朗",
    id: "9",
    theme: "",
    imageUrl: "/images/amada.jpg",
  },
  {
    name: "伊藤 智樹",
    id: "10",
    theme: "",
    imageUrl: "",
  },
  {
    name: "野中 駿",
    id: "11",
    theme: "",
    imageUrl: "",
  },
  {
    name: "Yang Guang",
    id: "12",
    theme: "",
    imageUrl: "/images/yang.jpg",
  },
  {
    name: "河野 隼一郎",
    id: "13",
    theme: "",
    imageUrl: "/images/kawano.jpg",
  },
  {
    name: "石川 拓海",
    id: "14",
    theme: "",
    imageUrl: "",
  },
  {
    name: "福西 誠樹",
    id: "15",
    theme: "",
    imageUrl: "",
  },
  {
    name: "山口 遊",
    id: "16",
    theme: "",
    imageUrl: "/images/lovotyamaguchi.png",
  },
  {
    name: "諏訪 司",
    id: "17",
    theme: "",
    imageUrl: "",
  },
  // More people...
];

const bachelor = [
  {
    name: "Zhang Sicheng",
    id: "1",
    theme: "",
    imageUrl: "",
  },
  {
    name: "Zhao Hongbo",
    id: "2",
    theme: "",
    imageUrl: "",
  },
  {
    name: "加藤 祐樹",
    id: "3",
    theme: "",
    imageUrl: "/images/kato.jpg",
  },
  {
    name: "渡邊 将太",
    id: "4",
    theme: "",
    imageUrl: "/images/watanabe.jpg",
  },
  {
    name: "岸本 和大",
    id: "5",
    theme: "",
    imageUrl: "/images/kishimoto.jpg",
  },
  {
    name: "藤本 遼太",
    id: "6",
    theme: "",
    imageUrl: "",
  },
  {
    name: "恩村 城伊",
    id: "7",
    theme: "",
    imageUrl: "",
  },
  {
    name: "坂口 太一",
    id: "8",
    theme: "",
    imageUrl: "",
  },
  {
    name: "牧田 昌大",
    id: "9",
    theme: "",
    imageUrl: "/images/makida.jpg",
  },
  // More people...
];

export function Faculty() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 mt-6">
      {faculties.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <Image
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              width="400"
              height="400"
              src={person.imageUrl}
              alt="Profile image"
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {person.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              {person.role && (
                <>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3">
                    <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                      {person.role}
                    </span>
                  </dd>
                </>
              )}
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <MailIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`${person.website}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <HomeIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Web</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Bachelor() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-10 mt-6">
      {bachelor.map((person) => (
        <div
          key={person.id}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div className="flex-shrink-0">
            {person.imageUrl && (
              <img
                className="h-10 w-10 rounded-full"
                src={person.imageUrl}
                alt=""
              />
            )}
            {!person.imageUrl && (
              <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500 truncate">{person.theme}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Master() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-10 mt-6">
      {postgraduate.map((person) => (
        <div
          key={person.id}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div className="flex-shrink-0">
            {person.imageUrl && (
              <img
                className="h-10 w-10 rounded-full"
                src={person.imageUrl}
                alt=""
              />
            )}
            {!person.imageUrl && (
              <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="text-sm text-gray-500 truncate">{person.theme}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

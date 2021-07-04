const announcements = [
  {
    id: 1,
    title: "2021/6/8",
    preview:
      "研究室公開があります。オンラインで実施します。研究室公開とは関係なく本研究室はいつもオープンですので、機会を問わず気軽に遊びに来てください。",
    href: "/openlab2021",
  },
  {
    id: 2,
    title: "2021/6/5",
    preview:
      "松村が運営メンバーとなっているCHI勉強会2021が開催されます。747本のCHI論文を一気に知る機会ですので是非ご参加ください。",
    href: "https://pgl.jp/seminars/chi2021",
  },
  {
    id: 3,
    title: "2021/6/1",
    preview: "プレイフルインタラクション研究室のWebpageを公開しました。",
    href: "#",
  },
];

export default function News() {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="pb-5 text-2xl font-bold">News</h1>
      <div className="flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a
                    href={announcement.href}
                    className="hover:underline focus:outline-none"
                  >
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {announcement.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {announcement.preview}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </div>
  );
}

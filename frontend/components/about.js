export default function About(props) {
  return (
    <div className="border rounded-xl bg-gray-50">
      <div className="text-left w-full p-8">
        <h3 className="pb-10 text-2xl font-bold">{props.name} &rarr;</h3>
        <div className="pb-16">{props.children}</div>
      </div>
    </div>
  )
}

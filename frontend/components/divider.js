export default function Divider(props) {
  return (
    <div className="relative mt-6">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-2 text-sm text-gray-500">{props.children}</span>
      </div>
    </div>
  );
}

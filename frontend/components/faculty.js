export default function Faculty(props) {
  return (
    <div className="sm:flex mt-4">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        <svg
          className="h-24 sm:w-24 border border-gray-300 bg-white text-gray-300"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth={1}
            d="M0 0l200 200M0 200L200 0"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-lg font-bold">{props.name}</h4>
        {props.children}
      </div>
    </div>
  );
}

import Navbar from "./navbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="flex items-center justify-center w-full h-24 border-t mt-10">
        <img
          className="hidden lg:block h-4 w-auto mr-2"
          src="/playful.svg"
          alt="Playful Laboratory"
        />{" "}
        Playful Laboratory, Ritsumeikan University
      </footer>
    </div>
  );
}

import "tailwindcss/tailwind.css";
import "../components/fonts.css";
import "../components/top.css";
import "../components/slider.css";
import "../components/navbar.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

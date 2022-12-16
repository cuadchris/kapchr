import "../styles/globals.css";
import { Raleway } from "@next/font/google";
import Nav from "../components/Nav";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Nav />
      <Component {...pageProps} />
    </main>
  );
}

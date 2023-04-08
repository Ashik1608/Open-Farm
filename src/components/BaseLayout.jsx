import Header from "./Header";
import Footer from "./Footer";
import { League_Spartan } from "next/font/google";

const ls = League_Spartan({
  weight: "400",
  subsets: ["latin"],
});

const BaseLayout = ({ home, children }) => {
  return (
    <section className={`${ls.className} container-fluid pt-1 pb-3`}>
      <Header isHome={home} />
      <hr className="mb-5 mt-0" />
      {children}
      <hr className="mt-5" />
      <Footer isHome={home} />
    </section>
  );
};

export default BaseLayout;

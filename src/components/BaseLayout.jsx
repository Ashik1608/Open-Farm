import Header from "./Header";
import Footer from "./Footer";

const BaseLayout = ({ children }) => {
  return (
    <section className="container-fluid py-3">
      <Header />
      <hr className="mb-5" />
      {children}
      <hr className="mt-5" />
      <Footer />
    </section>
  );
};

export default BaseLayout;

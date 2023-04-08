import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section>
      <div className="container-fluid text-muted fw-bold pt-5">
        <footer className="text-center text-md-start">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <p className="fw-bold mb-4 text-orange">Contact Us</p>
              <hr />
              <p className="mt-2 fs-small">
                <h3>
                  {" "}
                  <Link href="www.google.coms" className="text-muted">
                    {" "}
                    <AiFillInstagram />
                  </Link>{" "}
                </h3>
              </p>
              <p className="mt-2 fs-small">
                <h3>
                  {" "}
                  <Link href="www.google.coms" className="text-muted">
                    {" "}
                    <AiFillInstagram />{" "}
                  </Link>{" "}
                </h3>
              </p>
              <p className="mt-2 fs-small">
                <h3>
                  {" "}
                  <Link href="www.google.coms" className="text-muted">
                    {" "}
                    <AiFillInstagram />{" "}
                  </Link>{" "}
                </h3>
              </p>
            </div>

            <div className="col-md-3 mx-auto text-center">
              <p className="fw-bold mb-4 text-orange">Pages</p>
              <hr />
              <p className="mt-2 fs-small">
                <Link href="feed" className="text-muted">
                  DASHBOARD
                </Link>
              </p>
              <p className="mt-2 fs-small">
                <Link href="login" className="text-muted">
                  LOGIN
                </Link>
              </p>
              <p className="mt-2 fs-small">
                <Link href="registration" className="text-muted">
                  REGISTRATION
                </Link>
              </p>
              <p className="mt-2 fs-small">
                <Link href="post" className="text-muted">
                  POST
                </Link>
              </p>
            </div>

            <div className="col-md-3 mx-auto text-md-end">
              <p className="fw-bold mb-4 text-orange">Compliance</p>
              <hr />
              <p className="mt-2 fs-small">
                <Link href="/" className="text-muted">
                  Annual Compliance Pvt Ltd
                </Link>
              </p>
              <p className="mt-2 fs-small">
                <Link href="/" className="text-muted">
                  Annual Compliance LLP
                </Link>
              </p>
              <p className="mt-2 fs-small">
                <Link href="/" className="text-muted">
                  Compliance Calendar
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center">
            <hr />
            <div className="pb-3">Made with ❤️ and ☕️ by Open Farm Inc.</div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;

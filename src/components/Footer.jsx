import Link from "next/link";

const Footer = ({ home }) => {
  return (
    <section>
      <div className="container-fluid text-muted fw-bold pt-5">
        <footer className="text-center text-md-start">
          {home ? (
            <>
              <div className="row">
                <div className="col-md-3 mx-auto">
                  <p className="fw-bold mb-4 text-orange">Form a Company</p>
                  <hr />
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Private Limited Company
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Limited Liability Partnership
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      One Person Company
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Section 8 Company Registration
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Nidhi Company Registration
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Farmer Producer Company
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      MSME Registration
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Company Registration in Bangalore
                    </Link>
                  </p>
                </div>
                <div className="col-md-3 mx-auto text-center">
                  <p className="fw-bold mb-4 text-orange">Registrations</p>
                  <hr />
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      FSSAI License
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Import Export Code
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      Trademark Registration
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      GST Registration
                    </Link>
                  </p>
                  <p className="mt-2 fs-small">
                    <Link href="/" className="text-muted">
                      DSC Registration
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
                <div className="pb-3">
                  Made with ❤️ and ☕️ by Open Farm Inc.
                </div>
              </div>
            </>
          ) : (
            <div className="text-center mt-n5">
              Made with ❤️ and ☕️ by Open Farm Inc.
            </div>
          )}
        </footer>
      </div>
    </section>
  );
};

export default Footer;

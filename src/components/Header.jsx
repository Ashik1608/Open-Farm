import { FiHome } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCaretDownFill } from "react-icons/bs";
import Image from "next/image";
import { League_Spartan } from "next/font/google";

const ls_bold = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const Header = (isHome) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-between">
          {isHome ? (
            <div className="d-flex justify-content-center align-items-center">
              <a
                className="navbar-brand me-3 mb-1 d-flex justify-content-start align-items-center border border-2 border-dark rounded-pill p-1"
                href="#"
              >
                <Image
                  src="https://spline.design/_next/static/chunks/images/spline_logo-c068feca0f6ae756affe68498147df78.png"
                  width="30"
                  height="30"
                  alt="Open Farm Logo"
                  priority
                  className="m-0"
                />
              </a>
              <h4 className={`${ls_bold.className} mb-0`}>Open Farm Inc.</h4>
            </div>
          ) : (
            <>
              <div className="d-flex">
                <a
                  className="navbar-brand me-3 mb-1 d-flex align-items-center border border-2 border-dark rounded-pill p-1"
                  href="#"
                >
                  <Image
                    src="https://spline.design/_next/static/chunks/images/spline_logo-c068feca0f6ae756affe68498147df78.png"
                    width="30"
                    height="30"
                    alt="Open Farm Logo"
                    priority
                    className="m-0"
                  />
                </a>

                <form className="input-group w-auto my-auto d-none d-sm-flex">
                  <input
                    autoComplete="off"
                    type="search"
                    className="form-control rounded-pill border-0 bg-secondary text-white"
                    placeholder={`🔍 Search`}
                  />
                </form>
              </div>

              <ul className="navbar-nav flex-row d-none d-md-flex">
                <li className="nav-item me-3 me-lg-1 active">
                  <a className="nav-link" href="#">
                    <FiHome size="25" className="text-primary mx-3" />
                  </a>
                </li>

                <li className="nav-item me-3 me-lg-1">
                  <a className="nav-link" href="#">
                    <AiOutlineMessage size="25" className="mx-3" />
                  </a>
                </li>

                <li className="nav-item me-3 me-lg-1">
                  <a className="nav-link" href="#">
                    <BiBell size="25" className="mx-3" />
                  </a>
                </li>

                <li className="nav-item me-3 me-lg-1">
                  <a className="nav-link" href="#">
                    <AiOutlineHeart size="25" className="mx-3" />
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav flex-row bg-secondary rounded-pill px-1 py-0">
                <li className="nav-item">
                  <a
                    className="nav-link d-sm-flex justify-content-sm-center align-items-sm-center"
                    href="#"
                  >
                    <Image
                      src="https://api.dicebear.com/6.x/avataaars/svg?radius=50"
                      className="rounded-circle border border-2 border-dark rounded-pill p-1"
                      width="30"
                      height="30"
                      alt="Profile Picture"
                      priority
                    />
                    <span className="d-none d-sm-block ms-1 text-custom">
                      Jane Doe{" "}
                      <BsCaretDownFill className="ms-2 me-1" size="12" />
                    </span>
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;

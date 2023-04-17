import { FiHome } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { SiFuturelearn } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCaretDownFill } from "react-icons/bs";
import Image from "next/image";
import { League_Spartan } from "next/font/google";
import { useEffect, useState } from "react";
import { supabase } from "../lib/initSupabase";
import { useRouter } from "next/router";
import { MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";

const ls_bold = League_Spartan({
  weight: "700",
  subsets: ["latin"],
});

const Header = ({ isHome }) => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    } else {
      // redirect to login page
      router.push("/login");
      console.log("Logged out");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid justify-content-between">
          {isHome ? (
            <div className="d-flex justify-content-center align-items-center">
              {/* <a
                className="navbar-brand me-3 mb-1 d-flex justify-content-start align-items-center border border-2 border-dark rounded-pill p-1"
                href="#"
              >
                <Image
                  src="/Lightbulb.png"
                  width="30"
                  height="30"
                  alt="BrainWave Logo"
                  priority
                  className="m-0"
                />
              </a> */}

              <h4 className={`${ls_bold.className} mb-0`}>BrainWave.</h4>
            </div>
          ) : (
            <>
              <div className="d-flex">
                {/* <a
                  className="navbar-brand me-3 mb-1 d-flex align-items-center border border-2 border-dark rounded-pill p-1"
                  href="#"
                >
                  <Image
                    src="/Lightbulb.png"
                    width="30"
                    height="30"
                    alt="BrainWave Logo"
                    priority
                    className="m-0"
                  />
                </a> */}

                <h1 className="input-group w-auto my-auto d-none d-sm-flex">
                  Welcome!!
                </h1>
              </div>

              <ul className="navbar-nav flex-row d-none d-md-flex">
                <li className="nav-item me-3 me-lg-1 active">
                  <Link className="nav-link" href="/">
                    <FiHome size="25" className="text-primary mx-3" />
                  </Link>
                </li>

                <li className="nav-item me-3 me-lg-1">
                  <Link className="nav-link" href="/chat">
                    <AiOutlineMessage size="25" className="mx-3" />
                  </Link>
                </li>

                <li className="nav-item me-3 me-lg-1">
                  <Link className="nav-link" href="/learn">
                    <SiFuturelearn size="25" className="mx-3" />
                  </Link>
                </li>

                <li className="nav-item me-3 me-lg-1">
                  <a className="nav-link" href="/keep">
                    <AiOutlineHeart size="25" className="mx-3" />
                  </a>
                </li>
              </ul>

              <MDBBtn className="d-none d-md-block" onClick={handleLogout}>
                Logout
              </MDBBtn>

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

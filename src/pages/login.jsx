import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ name: "" });
  const [pass,setPass] = useState({passwrd:""})
  return( 
    <>
      <Head>
        <title>Open Farm | Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BaseLayout>
        <div className="login">     
          <div className="card name register">
            <div className="card-body new">
              <h3 className="card-title">Login</h3>
              <div className="card-text-center">
                <form>
                  <p className="card-text">
                    USERNAME <br />
                    <input
                      type="text"
                      className="input_field"
                      onChange={(event) => {
                        setUser({ ...user, name: event.target.value });
                      }}
                      value={user.name}
                    />
                    <br />
                    <br />
                  </p>
                  <p className="card-text">
                    PASSWORD <br />
                    <input
                      className="input_field"
                      type="text"
                      name="pass"
                      onChange={(event) => {
                        setPass({ ...pass, passwrd: event.target.value });
                      }}
                      value={pass.passwrd}
                    />{" "}
                    <br /> <br />
                  </p>
                  <button type="button" className="btn btn-primary_login">
                    Login
                  </button>
                  <br /> <br />
                  <p className="card-text">
                    <span className="forgot_password">
                      <Link href="/">Forgot Password</Link>
                    </span>
                    <br /> <br />
                    New?{" "}
                    <Link
                      href="/register"
                      style={{ color: "rgba(255, 253, 2, 1)" }}
                    >
                      Register Now!!
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          < div className="right_content">     
          <h1>
              {`"`}A <span> quote </span> that fits{`"`}
            </h1>
          </div>
          </div>
        </BaseLayout>
      </main>
    </>
  );
}

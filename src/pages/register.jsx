import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import { useState } from "react";

export default function Register() {
  const [user, setUser] = useState({ name: "" });

  return (
    <>
      <Head>
        <title>Open Farm | Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BaseLayout>
          <div className="login">
            <div className="card  register">
              <div className="card-body new">
                <h3 className="card-title">LOGIN</h3>
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
                      CONFIRM PASSWORD <br />
                      <input type="passwords" className="input_field" />
                      <br />
                      <br />
                    </p>
                    <button type="button" className="btn btn-primary_login">
                      <Link className="nav-link" href="/">
                        Login
                      </Link>
                    </button>
                    <br /> <br />
                  </form>
                </div>
              </div>
            </div>
            <div className="right_content">
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

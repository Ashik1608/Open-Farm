import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import Modal from "react-modal";
import { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetails, setIsDetails] = useState(0);
  const [desc, setDesc] = useState({ descrip: "" });
  return (
    <>
      <Head>
        <title>Open Farm | Post</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BaseLayout>
          <div className="post_body">
            <h1 className="post_header">
              {" "}
              SELECT <span> ROLES </span>{" "}
            </h1>
            <div div className="post_select">
              <button
                className="role"
                onClick={() => {
                  setIsDetails(1);
                  setIsOpen(true);
                }}
              >
                <h3> Land Owner</h3>
              </button>
              <button
                className="role"
                onClick={() => {
                  setIsDetails(2);
                  setIsOpen(true);
                }}
              >
                <h3>Cultivator</h3>
              </button>
              <button
                className="role"
                onClick={() => {
                  setIsDetails(3);
                  setIsOpen(true);
                }}
              >
                {" "}
                <h3> Soil Tester</h3>
              </button>
              <button
                className="role"
                onClick={() => {
                  setIsDetails(4);
                  setIsOpen(true);
                }}
              >
                {" "}
                <h3> Transporter </h3>
              </button>
              <button
                className="role"
                onClick={() => {
                  setIsDetails(5);
                  setIsOpen(true);
                }}
              >
                {" "}
                <h3> Storage </h3>
              </button>
              <Modal
                className="post_bg"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
              >
                {isDetails == 1 ? (
                  <div class="card name details">
                    <div class="card-body post">
                      <form>
                        <h5 class="card-title">Land Details</h5>
                        <p class="card-text">
                          Area :
                          <input
                            type="text"
                            className="input_post"
                            placeholder=" in square meters"
                          />
                        </p>
                        <p class="card-text">
                          Image :
                          <input type="file" className="input_post" />
                        </p>
                        <p class="card-text">
                          Location :
                          <input type="text" className="input_post" />
                        </p>
                        <p class="card-text">
                          Status :
                          <select className="input_post">
                            <option value="Start">Starting Stage</option>
                            <option value="tested">soil Tested</option>
                            <option value="cultivate">cultivated</option>
                            <option value="harvest">Harvested</option>
                            <option value="store">stored</option>
                          </select>
                        </p>
                        <p class="card-text">
                          Requirement :
                          <select className="input_post">
                            <option value="tester">soil Tester</option>
                            <option value="cultivater">
                              cultivater/harvester
                            </option>
                            <option value="storer">storage Unit</option>
                            <option value="transport">Transport</option>
                          </select>
                        </p>
                        <p class="card-text">
                          Description:
                          <br />
                          <textarea
                            className="input_post"
                            name="desc"
                            rows="4"
                            cols="50"
                            onChange={(event) => {
                              setDesc({ ...desc, descrip: event.target.value });
                            }}
                            value={desc.descrip}
                          >
                            {" "}
                          </textarea>
                        </p>

                        <button type="button" class="btn btn-primary_login ">
                          POST
                        </button>
                      </form>
                    </div>
                  </div>
                ) : isDetails == 2 ? (
                  <div class="card name details">
                    <div class="card-body post">
                      <form>
                        <h5 class="card-title">Cultivator</h5>
                        <p class="card-text">
                          Years oF Experience:
                          <input
                            type="text"
                            className="input_post"
                            placeholder=" in numbers"
                          />
                        </p>
                        <p class="card-text">
                          Location :
                          <input type="text" className="input_post" />
                        </p>
                        <p class="card-text">
                          Requirement :
                          <select className="input_post">
                            <option value="testing">Open To Test</option>
                            <option value="cultivating">
                              Opten To Cultivate
                            </option>
                            <option value="storing">Open To Store</option>
                            <option value="transporting">
                              Open To Transport
                            </option>
                          </select>
                        </p>
                        <p class="card-text">
                          Description:
                          <br />
                          <textarea
                            className="input_post"
                            name="desc"
                            rows="4"
                            cols="50"
                            onChange={(event) => {
                              setDesc({ ...desc, descrip: event.target.value });
                            }}
                            value={desc.descrip}
                          >
                            {" "}
                          </textarea>
                        </p>

                        <button type="button" class="btn btn-primary_login ">
                          POST
                        </button>
                      </form>
                    </div>
                  </div>
                ) : isDetails == 3 ? (
                  <div class="card name details">
                    <div class="card-body post">
                      <form>
                        <h5 class="card-title">Cultivator</h5>
                        <p class="card-text">
                          Years oF Experience:
                          <input
                            type="text"
                            className="input_post"
                            placeholder=" in numbers"
                          />
                        </p>
                        <p class="card-text">
                          Location :
                          <input type="text" className="input_post" />
                        </p>
                        <p class="card-text">
                          Requirement :
                          <select className="input_post">
                            <option value="testing">Open To Test</option>
                            <option value="cultivating">
                              Opten To Cultivate
                            </option>
                            <option value="storing">Open To Store</option>
                            <option value="transporting">
                              Open To Transport
                            </option>
                          </select>
                        </p>
                        <p class="card-text">
                          Description:
                          <br />
                          <textarea
                            className="input_post"
                            name="desc"
                            rows="4"
                            cols="50"
                            onChange={(event) => {
                              setDesc({ ...desc, descrip: event.target.value });
                            }}
                            value={desc.descrip}
                          >
                            {" "}
                          </textarea>
                        </p>

                        <button type="button" class="btn btn-primary_login ">
                          POST
                        </button>
                      </form>
                    </div>
                  </div>
                ) : isDetails == 4 ? (
                  <div class="card name details">
                    <div class="card-body post">
                      <form>
                        <h5 class="card-title">Cultivator</h5>
                        <p class="card-text">
                          Years oF Experience:
                          <input
                            type="text"
                            className="input_post"
                            placeholder=" in numbers"
                          />
                        </p>
                        <p class="card-text">
                          Location :
                          <input type="text" className="input_post" />
                        </p>
                        <p class="card-text">
                          Requirement :
                          <select className="input_post">
                            <option value="testing">Open To Test</option>
                            <option value="cultivating">
                              Opten To Cultivate
                            </option>
                            <option value="storing">Open To Store</option>
                            <option value="transporting">
                              Open To Transport
                            </option>
                          </select>
                        </p>
                        <p class="card-text">
                          Description:
                          <br />
                          <textarea
                            className="input_post"
                            name="desc"
                            rows="4"
                            cols="50"
                            onChange={(event) => {
                              setDesc({ ...desc, descrip: event.target.value });
                            }}
                            value={desc.descrip}
                          >
                            {" "}
                          </textarea>
                        </p>

                        <button type="button" class="btn btn-primary_login ">
                          POST
                        </button>
                      </form>
                    </div>
                  </div>
                ) : isDetails == 5 ? (
                  <div class="card name details">
                    <div class="card-body post">
                      <form>
                        <h5 class="card-title">Cultivator</h5>
                        <p class="card-text">
                          Years oF Experience:
                          <input
                            type="text"
                            className="input_post"
                            placeholder=" in numbers"
                          />
                        </p>
                        <p class="card-text">
                          Location :
                          <input type="text" className="input_post" />
                        </p>
                        <p class="card-text">
                          Requirement :
                          <select className="input_post">
                            <option value="testing">Open To Test</option>
                            <option value="cultivating">
                              Opten To Cultivate
                            </option>
                            <option value="storing">Open To Store</option>
                            <option value="transporting">
                              Open To Transport
                            </option>
                          </select>
                        </p>
                        <p class="card-text">
                          Description:
                          <br />
                          <textarea
                            className="input_post"
                            name="desc"
                            rows="4"
                            cols="50"
                            onChange={(event) => {
                              setDesc({ ...desc, descrip: event.target.value });
                            }}
                            value={desc.descrip}
                          >
                            {" "}
                          </textarea>
                        </p>

                        <button type="button" class="btn btn-primary_login ">
                          POST
                        </button>
                      </form>
                    </div>
                  </div>
                ) : null}

                <button className="close" onClick={() => setIsOpen(false)}>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    aria-label="Close"
                  />
                </button>
              </Modal>
            </div>
          </div>
        </BaseLayout>
      </main>
    </>
  );
}

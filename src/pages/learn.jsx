import React, { useState, useEffect } from "react";
import { getAllPlaylist } from "../utils/services";
import { Button } from "react-bootstrap";
import BaseLayout from "../components/BaseLayout";
import { Form } from "react-bootstrap";

export default function Learn() {
  const [videos, setVideos] = useState(null);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("best ways to learn");

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await getAllPlaylist(search);
      if (data) {
        setVideos(data.items);
        return data;
      }
      if (error) {
        console.log(error);
        return error;
      }
    }
    fetchData();
  }, [search]);

  return (
    <>
      <BaseLayout>
        <section className="dot-pattern vh-50 d-flex justify-content-center align-items-center">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-1 bold text-center gradient-text">Learn</h1>
            <h4 className="mb-4">
              Explore endless possibilities for Technologies with our diverse
              collection of Videos.
            </h4>
          </div>
        </section>
        <section className="container mt-3">
          <h3>Video Library</h3>
          <div className="d-flex justify-content-center align-items-center">
            <Form className="d-flex w-50">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => {
                  console.log(e.target.value);
                  setSearch(e.target.value);
                }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
          <div className="d-flex row justify-content-center">
            {videos &&
              videos.map((video) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 col-xl-3 px-3 m-3 card card-body shadow border-0 d-flex align-content-center justify-content-center">
                    <img
                      src={video.snippet.thumbnails.high.url}
                      className="rounded"
                      alt="video"
                    />
                    <div className="py-3 col-12 text-center">
                      <h6>{video.snippet.title}</h6>
                      <Button
                        className="btn btn-grad border-0 px-3 shadow mt-2"
                        onClick={() => {
                          setShow(!show);
                        }}
                      >
                        Play Video!
                      </Button>

                      {show && (
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id.videoId}`}
                          frameborder="0"
                          height="400"
                          width="100%"
                          allow="autoplay; encrypted-media"
                          allowfullscreen
                          title="video"
                          className="mt-5"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <hr className="my-5" />
        </section>
      </BaseLayout>
    </>
  );
}

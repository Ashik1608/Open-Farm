import React, { useContext, useState } from "react";
import { Context } from "../context";
import Router from "next/router";
import axios from "axios";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "86326f80-d461-444e-ba05-fcaf27254f46" } }
      )
      .then((r) =>
        Router.push({ pathname: "/chats", query: { username, secret } })
      );
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title"> NextJs Chat</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login/Signup
          </button>
        </form>
      </div>
    </div>
  );
}

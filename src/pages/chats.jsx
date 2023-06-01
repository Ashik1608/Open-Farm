import React, { useState, useEffect, useContext, } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function chats() {
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100ch - 200px)"
          projectID="5f9168d1-f23a-415d-baf8-e892a07736ba"
          userName={router.query.username}
          userSecret={router.query.secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  );
}

import React, { useRef, useEffect } from "react";
import Moment from "react-moment";

const Message = ({ msg, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);
  return (
    <div
      className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
      ref={scrollRef}
    >
      <p className={msg.from === user1 ? "me" : "friend"}>
        {msg.text}
        <br />
        <small className="small-text">
          <Moment fromNow>{msg.createdAt.toDate()}</Moment>
        </small>
        </p>
     
    </div>
  );
};

export default Message;

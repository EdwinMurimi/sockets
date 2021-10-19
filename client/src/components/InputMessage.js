import React, { useState } from "react";
import "../App.css";

const NewMessage = ({ socket }) => {
  const [value, setValue] = useState("");

  const SendMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { value });
    setValue("");
  };

  return (
    <form>
      <input
        autoFocus
        value={value}
        required
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="button" onClick={SendMessage}>
        <i className="fas fa-paper-plane"></i>Send
      </button>
    </form>
  );
};

export default NewMessage;

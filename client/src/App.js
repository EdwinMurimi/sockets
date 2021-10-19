import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import MessageList from "./components/MessageList";
import InputMessage from "./components/InputMessage";

import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:4000`);
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="body">
      <div className="App">
        <h1>Socket.io client in React</h1>
        {socket ? (
          <div className="content">
            <MessageList socket={socket} />
            <InputMessage socket={socket} />
          </div>
        ) : (
          <h1>No connection yet...</h1>
        )}
      </div>
    </div>
  );
}

export default App;

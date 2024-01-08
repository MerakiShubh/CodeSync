import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4;
    setRoomId(id);
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/code-sync.png" alt="" className="homePageLogo" />
        <h4 className="mainLabel">Pasete invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            value={roomId}
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="inputBox"
            placeholder="USERNAME"
          />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have and invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        Built with 💛&nbsp;by <a href="https://github.com/merakiShubh">Shubh</a>
      </footer>
    </div>
  );
};

export default Home;

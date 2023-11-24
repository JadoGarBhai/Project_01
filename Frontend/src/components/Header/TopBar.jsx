import React, { useState, useEffect } from "react";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import dayjs from "dayjs";

function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format("DD/MM/YYYY, hh:mm:ss A"));
    });
  }, []);

  return (
    <header className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <p className="mb-0 text-white">{time}</p>
          </div>
          <div className="col-5 text-end">
            <a
              href="https://www.facebook.com/ahmad.jajja.9081/"
              className="text-light"
              target="_blank"
            >
              <BsFacebook className="mb-0 me-2" />
            </a>
            <a
              href="https://github.com/Ahmadjajja?tab=overview&from=2022-06-01&to=2022-06-30"
              className="text-light"
              target="_blank"
            >
              <BsGithub className="mb-0 me-2" />
            </a>

            <a
              href="https://twitter.com/AhmadJajja786"
              className="text-light"
              target="_blank"
            >
              <BsTwitter className="mb-0 me-2" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;

import React, { useState, useEffect } from "react";
import { BsFacebook, BsGithub, BsWhatsapp } from "react-icons/bs";
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
              href="https://www.facebook.com/profile.php?id=100008323875360"
              className="text-light"
              target="_blank"
            >
              <BsFacebook className="mb-0 me-2" />
            </a>
            <a
              href="https://github.com/JadoGarBhai"
              className="text-light"
              target="_blank"
            >
              <BsGithub className="mb-0 me-2" />
            </a>

            <a
              href="https://wa.me/+923487613204"
              className="text-light"
              target="_blank"
            >
              <BsWhatsapp className="mb-0 me-2" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;

import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container-fluid" id="footer">
          <div className="row">
            <div className="col">
              <p>
                Made with <span className="text-white"> ❤ </span> by{" "}
                <a
                  className="text-white fw-bold"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  href="https://github.com/JadoGarBhai"
                >
                  <span>Sikander Nawaz</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

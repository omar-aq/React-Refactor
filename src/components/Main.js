import React from "react";

//components
import Cards from "./Cards";

function Main() {
  return (
    <main>
      <header className="row tm-welcome-section">
        <h2 className="col-12 text-center tm-section-title">
          Welcome to Simple House
        </h2>
        <p className="col-12 text-center">
          Total 3 HTML pages are included in this template. Header pic has a
          parallax effect. You can feel free to download, edit and use this
          TemplateMo layout for your commercial or non-commercial websites.
        </p>
      </header>

      <div className="tm-paging-links">
        <nav>
          <ul>
            <li className="tm-paging-item">
              <a href="/" className="tm-paging-link active">
                Pizza
              </a>
            </li>
            <li className="tm-paging-item">
              <a href="/" className="tm-paging-link">
                Salad
              </a>
            </li>
            <li className="tm-paging-item">
              <a href="/" className="tm-paging-link">
                Noodle
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="row tm-gallery">
        <Cards />
      </div>
    </main>
  );
}

export default Main;

import React, { Component } from "react";

export default class HeaderNav extends Component {
  render() {
    return (
      <div className="bg-dark ">
        <nav class="navbar navbar-expand-lg bg-body-tertiary container">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              Start Bootstrap
            </a>

            <div
              class="collapse navbar-collapse flex-grow-0"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav ">
                <a
                  class=" nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a class="text-white nav-link" href="#">
                  About
                </a>
                <a class="text-white nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

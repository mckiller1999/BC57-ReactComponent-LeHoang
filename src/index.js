import React from "react";
import ReactDOM from "react-dom/client";
import HeaderNav from "./components/HeaderNav";
import HeaderContent from "./components/HeaderContent";
import CardContent from "./components/CardCt/CardContent";
import Footer from "./components/Footer";
import CardCol from "./components/CardCol";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <header>
      <HeaderNav />
      <HeaderContent />
    </header>
    <body>
      <CardCol />
    </body>
    <footer>
      <Footer />
    </footer>
  </div>
);

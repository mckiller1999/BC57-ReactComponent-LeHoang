import React from "react";
import ReactDOM from "react-dom/client";
import HeaderNav from "./components/HeaderNav";
import HeaderContent from "./components/HeaderContent";
import CardContent from "./components/CardContent";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <header>
      <HeaderNav />
      <HeaderContent />
    </header>
    <body>
      <CardContent />
    </body>
    <footer>
      <Footer />
    </footer>
  </div>
);

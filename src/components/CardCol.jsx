import React, { Component } from "react";
import CardContent from "./CardCt/CardContent";
import CardContent1 from "./CardCt/CardContent1";
import CardContent2 from "./CardCt/CardContent2";
import CardContent3 from "./CardCt/CardContent3";
import CardContent4 from "./CardCt/CardContent4";
import CardContent5 from "./CardCt/CardContent5";

export default class CardCol extends Component {
  render() {
    return (
      <div className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <CardContent />
            <CardContent1 />
            <CardContent2 />
            <CardContent3 />
            <CardContent4 />
            <CardContent5 />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Dialog extends Component {
  render() {
    return (
      <div className="site-dialog site-dialog--show grid-container">
        <div className="site-dialog__backdrop" />
        {/* <div className="site-dialog__window">test</div> */}
      </div>
    );
  }
}

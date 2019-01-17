import React, { Component } from "react";

export default class ScrollProgress extends Component {
  componentDidMount() {
    document.addEventListener("scroll", e => {
      const totalHeight =
        document.documentElement.offsetHeight -
        document.documentElement.clientHeight;
      const scrollPos = document.documentElement.scrollTop;
      const scrollElement = this.refs.scroll;
      scrollElement.style.width = `${(100 * (scrollPos / totalHeight)).toFixed(
        2
      )}%`;
    });
  }

  render() {
    return <div ref="scroll" className="site-scroll" />;
  }
}

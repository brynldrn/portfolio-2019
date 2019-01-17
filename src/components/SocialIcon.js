import React, { Component } from "react";

export default class SocialIcon extends Component {
  render() {
    return (
      <div className="site-social">
        <a
          href={this.props.href}
          target="_blank"
          alt={this.props.alt}
          rel="noopener noreferrer"
        >
          <span className={this.props.icon} />
        </a>
      </div>
    );
  }
}

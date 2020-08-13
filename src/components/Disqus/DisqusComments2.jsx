import React, { Component } from "react";
import Disqus from "disqus-react";

export default class extends Component {
  render() {
    const disqusShortname = "guruji123";
    const disqusConfig = {
      url: "http://letsbethechange.in",
      identifier: "blog-2",
      title: "Cleanathon: What, Why & How",
    };

    return (
      <div className="article-container">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    );
  }
}

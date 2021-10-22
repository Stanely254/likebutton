import cx from "classnames";
import React, { Component } from "react";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      active: null,
      liked: false,
    };

    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike = () => {
    let localLike = this.state.liked;

    localLike = !localLike;

    if (localLike) {
      this.setState({
        liked: localLike,
        active: "liked",
        likes: this.state.likes + 1,
      });
    } else {
      this.setState({
        liked: localLike,
        active: "liked",
        likes: this.state.likes - 1,
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <h2>Like Button</h2>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>

        <button
          className={`like-button ${this.state.liked ? `liked` : ``}`}
          onClick={this.toggleLike}
        >
          Like | {this.state.likes}
        </button>
      </>
    );
  }
}

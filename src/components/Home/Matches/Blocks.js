import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../UI/Misc";

import MatchesBlock from "../../UI/Matches_block";

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches)
        });
      });
  }

  displayMatches = matches => {
    matches
      ? matches.map(match => {
          return (
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          );
        })
      : null;
  };

  render() {
    console.log(this.state.matches);
    return (
      <div className="home_matches">
        {this.displayMatches(this.state.matches)}
      </div>
    );
  }
}

export default Blocks;

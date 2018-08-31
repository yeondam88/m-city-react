import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../UI/Misc";

import MatchesBlock from "../../UI/Matches_block";
import Slide from "react-reveal";

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

  render() {
    return (
      <div className="home_matches">
        {this.state.matches &&
          this.state.matches.map((match, index) => (
            <Slide bottom>
              <div key={index} className="item">
                <div className="wrapper">
                  <MatchesBlock match={match} />
                </div>
              </div>
            </Slide>
          ))}
      </div>
    );
  }
}

export default Blocks;

import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from '../../../Resources/images/players/Otamendi.png';

class HomeCards extends Component {
  state = {
    show: this.props.show,
    cards: [
      {
        bottom: '90',
        left: 300
      },
      {
        bottom: '60',
        left: 200
      },
      {
        bottom: '30',
        left: 100
      },
      {
        bottom: 0,
        left: 0
      },
    ]
  }

  showAnimationCards = () => {

  }

  render() {
    return <div>
      {this.showAnimateCards()}
    </div>;
  }
}

export default HomeCards;

import React from "react";
import Canvas from "./Canvas";
import ArtChoiser from "./ArtChoiser";
import PollockConf from "./PollockConf";
import CirclesConf from "./CirclesConf";
import SquaresConf from "./SquaresConf";
import RowsConf from "./RowsConf";

const defaultOptions = {
  activeArts: {
    pollock: 1,
    circles: false,
    squares: false,
    rows: false,
  },
  pollockConf: {
    count: 5,
    lineWidth: 5,
    fill: true,
  },
  circlesConf: {
    count: 5,
    radiusC: 5,
    lineWidth: 5,
    fill: true,
  },
  squaresConf: {
    count: 5,
    sizeC: 5,
    lineWidth: 5,
    fill: true,
  },
  rowsConf: {
    widthC: 5,
    heightC: 5,
    nice: false,
    lineWidth: 5,
    fill: true,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultOptions;
    this.handleSelectArt = this.handleSelectArt.bind(this);
  }

  handleChangeConfVal = (conf, key, value) => {
    const newState = {
      [conf]: {
        ...this.state[conf],
        [key]: value,
      },
    };
    this.setState(newState);
  };

  handleSelectArt = (type, value) => {
    const newState = {
      activeArts: {
        ...this.state.activeArts,
        [type]: value,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <ArtChoiser
            activeArts={this.state.activeArts}
            onSelect={this.handleSelectArt}
          />
          {this.state.activeArts.pollock && (
            <PollockConf
              onChange={(key, value) => {
                this.handleChangeConfVal("pollockConf", key, value);
              }}
              {...this.state.pollockConf}
            />
          )}
          {this.state.activeArts.circles && (
            <CirclesConf
              onChange={(key, value) => {
                this.handleChangeConfVal("circlesConf", key, value);
              }}
              {...this.state.circlesConf}
            />
          )}
          {this.state.activeArts.squares && (
            <SquaresConf
              onChange={(key, value) => {
                this.handleChangeConfVal("squaresConf", key, value);
              }}
              {...this.state.squaresConf}
            />
          )}
          {this.state.activeArts.rows && (
            <RowsConf
              onChange={(key, value) => {
                this.handleChangeConfVal("rowsConf", key, value);
              }}
              {...this.state.rowsConf}
            />
          )}
        </div>
        <Canvas
          pollockConf={this.state.pollockConf}
          circlesConf={this.state.circlesConf}
          squaresConf={this.state.squaresConf}
          rowsConf={this.state.rowsConf}
          activeArts={this.state.activeArts}
        />
      </div>
    );
  }
}

export default App;

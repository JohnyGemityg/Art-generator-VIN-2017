import React from "react";
import Canvas from "./Canvas";
import ArtChoiser from "./ArtChoiser";
import PollockConf from "./PollockConf";
import CirclesConf from "./CirclesConf";
import SquaresConf from "./SquaresConf";
import RowsConf from "./RowsConf";
import ColorPallete from "./ColorPallete";
import BackgroundPicker from "./BackgroundPicker";

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
  colorPallete: ["#588C7E", "#f2e394", "#f2ae72", "#d96459", "#8c4646"],
  activePickerId: null,
  backgroundColor: "#eee",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultOptions;
    this.handleSelectArt = this.handleSelectArt.bind(this);
    this.handleChosePickerId = this.handleChosePickerId.bind(this);
    this.handlePickerDelete = this.handlePickerDelete.bind(this);
    this.handlePickComplete = this.handlePickComplete.bind(this);
    this.handleCloseColorPicker = this.handleCloseColorPicker.bind(this);
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

  handleChosePickerId = id => {
    this.setState({ activePickerId: id });
  };

  handlePickerDelete = id => {
    this.setState({
      colorPallete: [
        ...this.state.colorPallete.slice(0, id),
        ...this.state.colorPallete.slice(id + 1),
      ],
      activePicker:
        this.state.activePickerId === id ? null : this.state.activePickerId,
    });
  };

  handlePickComplete = (color, id) => {
    if (id === -1) {
      this.setState({
        colorPallete: [...this.state.colorPallete, color.hex],
        activePickerId: this.state.colorPallete.length,
      });
    } else {
      const newcolorPallete = [...this.state.colorPallete];
      newcolorPallete[id] = color.hex;
      this.setState({ colorPallete: newcolorPallete });
    }
  };

  handleCloseColorPicker = () => {
    this.setState({ activePickerId: null });
  };

  handleBackgroundColorChange = color => {
    this.setState({ backgroundColor: color.hex });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%", padding: "0 5px" }}>
          <BackgroundPicker
            color={this.state.backgroundColor}
            onColorChange={this.handleBackgroundColorChange}
          />
          <ColorPallete
            colors={this.state.colorPallete}
            activePickerId={this.state.activePickerId}
            onChosePickerId={this.handleChosePickerId}
            onPickerDelete={this.handlePickerDelete}
            onPickComplete={this.handlePickComplete}
            onBlur={this.handleCloseColorPicker}
          />
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
          colorPallete={this.state.colorPallete}
          pollockConf={this.state.pollockConf}
          circlesConf={this.state.circlesConf}
          squaresConf={this.state.squaresConf}
          rowsConf={this.state.rowsConf}
          activeArts={this.state.activeArts}
          backgroundColor={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default App;

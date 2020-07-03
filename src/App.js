import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Setting from "./components/setting";
import "bootstrap/dist/css/bootstrap.css";
import FormComponent from "./components/formComponent";
import TextAreaCompnent from "./components/TextAreaComponent";
import ResultComponent from "./components/ResultComponent";
import { ThemeConsumer } from "styled-components";

class App extends Component {
  state = {
    components: [
      {
        width: "4",
        label: "Font Size",
        key: "fontSize",
        type: "number",
        unit: "pt",
        value: 12,
      },
    ],
    location: "ads",
    hidden: "hidden",
    textAreaSettings: {
      fontFamily: "Yellowtail",
      fontSize: 12,
      color: "black",
      padding: 0,
      wordSpacing: 3,
      letterSpacing: 0,
    },
  };

  handleFormChange = (e) => {
    const components = [...this.state.components];
    // FIXME: review id
    const component = components.filter((c) => c.key === e.target.id);
    const index = components.indexOf(component);
    components[index] = { ...e.target };
    components[index].value = +e.target.value;
    console.log(index);
    console.log(e.target);
    this.setState({ components });
  };

  showImage = () => {
    this.setState({ hidden: "" });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <h1>
          <br />
        </h1>

        <Header></Header>
        <FormComponent
          handleOnClick={this.showImage}
          onChange={this.handleFormChange}
          fontSize={this.state.textAreaSettings.fontSize}
          components={this.state.components}
        />
        <div className="row">
          <TextAreaCompnent
            fontFamily={this.state.textAreaSettings.fontFamily}
            fontSize={this.state.components[0].value}
            color={this.state.textAreaSettings.color}
            padding={this.state.textAreaSettings.padding}
            wordSpacing={this.state.textAreaSettings.wordSpacing}
            letterSpacing={this.state.textAreaSettings.letterSpacing}
          />
          <ResultComponent hidden={this.state.hidden} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

// import React, { Component, useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./components/header";
// import Setting from "./components/setting";

// const App = () => {
//   const [location, setLocation] = useState("jjf");
//   return (
//     <React.Fragment>
//       <h1>{location}</h1>
//       <input
//         placeholder="location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       ></input>
//       <Header></Header>
//       <Setting></Setting>
//     </React.Fragment>
//   );
// };

// export default App;

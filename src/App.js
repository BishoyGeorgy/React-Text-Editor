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
import { components, selectComponents, hidden } from "./state.json";

class App extends Component {
  state = { components, selectComponents, hidden };

  handleFormChange = (e) => {
    const isSelect = e.target.type === "select-one";
    const components = isSelect
      ? this.state.selectComponents
      : this.state.components;
    const component = components.filter((c) => c.key === e.target.id)[0];
    const index = components.indexOf(component);
    components[index].value = isSelect ? e.target.value : +e.target.value;
    console.log(component);
    this.setState({
      components: isSelect ? this.state.components : components,
      selectComponents: isSelect ? components : this.state.selectComponents,
    });
  };

  showImage = () => {
    this.setState({ hidden: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h1>
          <br />
        </h1>

        <Header></Header>
        <FormComponent
          handleOnClick={this.showImage}
          onChange={this.handleFormChange}
          components={this.state.components}
          selectComponents={this.state.selectComponents}
        />
        <div className="row">
          <TextAreaCompnent
            fontFamily={this.state.selectComponents[0].value}
            color={this.state.selectComponents[1].value}
            fontSize={this.state.components[0].value}
            padding={this.state.components[1].value}
            wordSpacing={this.state.components[2].value}
            letterSpacing={this.state.components[3].value}
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

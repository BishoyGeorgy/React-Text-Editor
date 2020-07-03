import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Setting from "./components/setting";
import "bootstrap/dist/css/bootstrap.css";
import FormComponent from "./components/formComponent";
import TextAreaCompnent from "./components/TextAreaComponent";
import ResultComponent from "./components/ResultComponent";

class App extends Component {
  state = { location: "ads", hidden: "hidden" };

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
        <FormComponent handleOnClick={this.showImage} />
        <div className="row">
          <TextAreaCompnent />
          <ResultComponent hidden={this.state.hidden} />
        </div>
        {/* <input
          placeholder="location"
          value={this.state.location}
          onChange={(e) => this.setState({ location: e.target.value })}
        ></input> */}
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

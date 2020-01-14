/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import { Provider } from "react-redux";

// Redux
import { store } from "../../redux/store";

// Components
import Navigation from "./Navigation";

/* Component */
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </div>
    );
  }
}

/* Export */
export default App;
/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Links
import Links from "../values/Links";

// CSS
import styles from "./css/App.css";

/* Component */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }
  componentDidMount() {
    this.setState({
      pages: Links
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {
              this.state.pages.map((value, index) => {
                return (
                  <Route path={value.path} key={value.name}>
                    <Suspense fallback={<p>Loading</p>}>
                      {
                        React.createElement(value.component)
                      }
                    </Suspense>
                  </Route>
                );
              })
            }
          </Switch>
        </Router>
      </div>
    );
  }
}

/* Export */
export default App;
/*
* David Shefcik 2020
*/

/* Imports */
// Modules
import React from "react";
import Recaptcha from "reaptcha";
import axios from "axios";

// Components
import PageTitle from "../../layout/PageTitle"; 
import Box from "../../layout/Box";

// CSS
import styles from "./css/ContactPage.css";

/* Component */
class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasResult: false,
      email: "",
      buttonText: "I'm a Human!"
    };

    this.captcha = React.createRef();
  }
  submit = () => {
    this.captcha.current.execute().then(r => {
      this.setState({
        buttonText: "Please wait..."
      });
    }).catch(e => {
      this.setState({
        buttonText: "Try again."
      });
    });
  }
  verify = (response) => {
    let apiURL = process.env.NODE_ENV === "development" ? ("http://192.168.1.69/api") : ("https://davidshefcik.com/api");

    axios.post(`${apiURL}/email`, {"captcha": response}).then(res => {
      let email = res["data"]["email"];
      if(email) {
        this.setState({
          hasResult: true,
          email: <a href={`mailto:${email}`} title="Email">{email}</a>
        });
      }
    }).catch(error => {
      this.setState({
        buttonText: "Error!"
      });
    });
  }
  render() {
    return (
      <div>
        <PageTitle title="Contact Me" />
        <Box>
          <div className={styles.captcha}>
            <Recaptcha
              ref={this.captcha}
              sitekey={process.env.RECAPTCHA_SITE_KEY}
              size="invisible"
              onVerify={this.verify}
            />
          </div>
          {
            this.state.hasResult ? (
              <p>{this.state.email}</p>
            ) : (
              <button className={styles.button} title="I'm Human!" onClick={this.submit}>
                { this.state.buttonText }
              </button>
            )
          }
          <div className={styles.captchaNote}>This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank">&nbsp;Privacy Policy</a>&nbsp;and
            <a href="https://policies.google.com/terms" target="_blank">&nbsp;Terms of Service</a>&nbsp;apply.
          </div>
        </Box>
      </div>
    );
  }
}

/* Export */
export default ContactPage;
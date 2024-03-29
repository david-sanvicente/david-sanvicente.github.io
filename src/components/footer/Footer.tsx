import React, { Component } from "react";
import ContactButtons from "../contactButtons/ContactButtons";
import "./styles.scss";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer" className={`footer`}>
          <div className={`container`}>
            <h1>
              Contact Me
              <br />
              <small>Please reach out with any questions or feedback</small>
            </h1>
            <div id={`footer_buttons`}>
              <ContactButtons />
            </div>
            <div id="emailMe">
              <a
                href={`mailto:sanvicented1@gmail.com?subject = Feedback&body = Message`}
              >
                <h3 id="emailMe">sanvicented1@gmail.com</h3>
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactform">
        <h1>Contact Me For Work/Genral Enquiries</h1>
        <form class="my-form">
          <div class="container">
            <h1>Get in touch!</h1>
            <ul>
              <li>
                <select>
                  <option selected disabled>
                    -- Please choose an option --
                  </option>
                  <option>Request Quote</option>
                  <option>Send Resume</option>
                  <option>Other</option>
                </select>
              </li>
              <li>
                <div class="grid grid-2">
                  <input type="text" placeholder="Name" required />
                  <input type="text" placeholder="Surname" required />
                </div>
              </li>
              <li>
                <div class="grid grid-2">
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone" />
                </div>
              </li>
              <li>
                <textarea placeholder="Message"></textarea>
              </li>
              <li>
                <input type="checkbox" id="terms" />
                <label for="terms">
                  I have read and agreed with{" "}
                  <a href="">the terms and conditions.</a>
                </label>
              </li>
              <li>
                <div class="grid grid-3">
                  <div class="required-msg">REQUIRED FIELDS</div>
                  <button class="btn-grid" type="submit" disabled>
                    <span class="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                        alt=""
                      />
                    </span>
                    <span class="front">SUBMIT</span>
                  </button>
                  <button class="btn-grid" type="reset" disabled>
                    <span class="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                        alt=""
                      />
                    </span>
                    <span class="front">RESET</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;

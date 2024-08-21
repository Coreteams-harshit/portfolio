import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();
  const toast = useToast()
//  const [fname,setFname] = useState('')
//  const [lname,setLname] = useState('')
//  const [email,setEmail] = useState('')
//  const [text,setText] = useState('')
//  const [number,setNumber] = useState('')
  const sendEmail = (e) => {
    console.log("this is hurting me")
    e.preventDefault();

    emailjs
      .sendForm('service_gyvk2c6', 'template_opa8gn4', form.current, {
        publicKey: 'nCrHyodpRcdmhyllT',
      })
      .then(
        () => {
          toast({
            title:'Form Successfully Submit',
            duration:3000,
            status:"success"
          })
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          toast({
            title:'Form Submission Failed ',
            duration:3000,
            status:"error"
          })
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="contactform">
        {/* <h1>Contact Me For Work/Genral Enquiries</h1> */}
        <form ref={form} class="my-form"  onSubmit={sendEmail}>
          <div class="container">
            <h1>Get in touch!</h1>
            <ul>
              {/* <li>
                <select>
                  <option selected disabled>
                    -- Please choose an option --
                  </option>
                  <option>Request Quote</option>
                  <option>Send Resume</option>
                  <option>Other</option>
                </select>
              </li> */}
              <li>
                <div class="grid grid-2">
                  <input type="text" name="from_Fname"  placeholder="Name" required />
                  <input type="text" name="from_Lname"  placeholder="Surname" required />
                </div>
              </li>
              <li>
                <div class="grid grid-2">
                  <input type="email" name="from_email" placeholder="Email" required />
                  <input type="tel" name="from_mobile" placeholder="Phone" />
                </div>
              </li>
              <li>
                <textarea className="test"  placeholder="Message" name="from_Fname"></textarea>
              </li>
              <li>
                <div class="grid grid-3">
                  {/* <div class="required-msg">REQUIRED FIELDS</div> */}
                  <button class="btn-grid" type="submit" value='Send'>
                  <span class="back">
                      <img
                      style={{margin:'auto'}}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                        alt=""
                      />
                    </span>
                    <span class="front">SUBMIT</span>
                  </button>
                  {/* <button class="btn-grid" type="reset" disabled>
                    <span class="back">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                        alt=""
                      />
                    </span>
                    <span class="front">RESET</span>
                  </button> */}
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

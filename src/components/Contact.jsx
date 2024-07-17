import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contactform">
        <h1>Contact Me For Work/Genral Enquiries</h1>
        <form id="clearFrom">
          <div className="mb-3">
            <label for="fname" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="fname"
              placeholder="Your name.."
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="lname" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email & Phone with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
            <input type="phone" className="form-control" id="phone" />
          </div>
          <div className="mb-3">
            <label for="enquries" className="form-label">Enquiries</label>
            <input
              type="enquries"
              className="form-control"
              id="enquries"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3" id="form-check">
            <input type="checkbox" className="form-check-input" id="isclient" />
            <label className="form-check-label" for="isclient">I Want You To Work on a project with me </label>
          </div>

          <button type="submit" id="submit" className="btn1 btn1-sm">Submit</button>
        </form>
      </div>


     



    </>
  )
}

export default Contact
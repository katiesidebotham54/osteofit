import React, { useState } from 'react'
import axios from 'axios'
import '../styling/contactStyle.scss'
import '../styling/mainStyle.scss'

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    f_name:'',
    l_name:'',
    subject:'',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        f_name:'',
        l_name:'',
        subject:'',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mvodkepk',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div className = 'Contact'>
    <div className="contact-container">
      <h1 className = "form-title">Get in Touch!</h1>
      <p className = "contact-para">For all questions and inquiries, please use the form below.</p>
      <form id="form" onSubmit={handleOnSubmit}>
      <div className = "f_name">
        <input
        id="first_name"
        placeholder="First Name"
          name="_fname"
          onChange={handleOnChange}
          required
        />
        </div>
        <div className = 'l_name'>
        <input
          id="last_name"
          placeholder="Last Name"
          name="_lname"
          onChange={handleOnChange}
          required
        />
        </div>
        <div className = "subject">
        <input
          id="subject"
          placeholder="Subject"
          type="text"
          name="_subject"
          onChange={handleOnChange}
          required
          value={inputs.subject}
        />
          </div>
<div className = "client_email">

        <input
          id="email"
          placeholder="Email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        </div>
        <div className = "msg">

        <textarea
          id="message"
          placeholder="I'm writing to..."
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        </div>
        <br/>
        <button id = "contact-button" className = "btn btn-sm btn-primary" type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted!'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
    </div>
  )
}
export default Contact;
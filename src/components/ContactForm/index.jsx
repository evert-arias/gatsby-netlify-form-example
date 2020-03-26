import React from "react"
import { navigate } from "gatsby-link"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form
        name="Contact Form"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <TextField
            label="Name"
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </p>
        <p>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </p>
        <p>
          <TextField
            id="message"
            label="Message"
            name="message"
            onChange={handleChange}
          />
        </p>
        <p>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </p>
      </form>
    </div>
  )
}

export default ContactForm

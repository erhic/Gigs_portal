import { useState } from "react"
import { Link } from "react-router-dom"


export default function Login() {

  const [userDetailis, setUserDetails] = useState({

    email: "",
    password: "",

  })
  const [message, setMessage] = useState({
    type: "invisible-msg",
    text: "some text here"
  })
  function handleInput(event) {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    })
  }
  function handleSubmit(event) {
    event.preventDefault()

    fetch("http://localhost:3500/login", {
      method: "POST",
      body: JSON.stringify(userDetailis),
      headers: {
        'Content-Type': "application/json"
      }
    }).then((response) => response.json())
      .then((data) => {

        if (data.token !== undefined)

          setMessage({ type: "success", text: data.message })

        setUserDetails({
          email: "",
          password: ""
        })
        setTimeout(() => { setMessage({ type: "invisible-msg", text: "some info" }) }, 5000)


      }).catch((err) => console.log(err))

  }

  return (
    <section className="form-container">
      <form className="form-body" onSubmit={handleSubmit}>
        <p className={message.type}>{message.text}</p>
        <input className="form-input" type="email" placeholder="Email" name="email"
          value={userDetailis.email} required onChange={handleInput} />
        <input className="form-input" type="password" minLength={8} placeholder="Password" name="password"
          value={userDetailis.password} onChange={handleInput} />

        <button className="form-button" type="submit">Login</button>
        <p>Dont have an account? <Link to="/register" >Register</Link></p>
      </form>

    </section>
  )
}

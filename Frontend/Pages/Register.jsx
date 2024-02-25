import { useState } from "react"
import { Link } from "react-router-dom";
import { baseUrl } from "../src/context";


export default function Register() {
  const [userDetailis, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",

  })

  //message state before response
  const [message, setMessage] = useState({
    type: "invisible-msg",
    text: "some info "
  })

  //change state after change on input
  function handleInput(event) {
    setUserDetails((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }
    })
  }

  //trigger and perform submission 
  function handleSubmit(event) {
    event.preventDefault()
    console.log(userDetailis)
    //fetch api
    fetch(`${baseUrl}/register`, {
      method: "POST",
      body: JSON.stringify(userDetailis),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json())
      .then((data) => {

        //message response fromm server
        setMessage({ type: "success", text: data.message })

        //clean fields afer suubmission
        setUserDetails({
          username: "",
          email: "",
          password: "",

        })

        //clear the pop response text
        setTimeout(() => {
          setMessage({ type: "invisible-msg", text: "some text" });
        }, 5000)
      }).catch((err) => console.log(err))

  }

  return (
    <section className="form-container">
      <p className={message.type}>{message.text}</p>
      <form className="form-body" onSubmit={handleSubmit}>
        <input className="form-input" type="text" placeholder=" Enter Username" name="username"
          value={userDetailis.username} required onChange={handleInput} />
        <input className="form-input" type="email" placeholder="Email" name="email"
          value={userDetailis.email} required onChange={handleInput} />
        <input className="form-input" type="password" minLength={8} placeholder="Password" name="password"
          value={userDetailis.password} onChange={handleInput} />
        <button className="form-button" type="submit">Register</button>
        <p>Already have an account? <Link to="/login" >Login</Link></p>
      </form>

    </section>
  )
}

import { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../src/context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const loggedData = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({

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

    fetch("http://localhost:3501/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': "application/json"
      }
    })
      .then((response) => {
        if (response.status === 404) {
          setMessage({ type: "error", text: "Username or Email Doesnt Exist" });
        }
        else if (response.status === 403) {
          setMessage({ type: "error", text: "Incorrect Password" });
        }
        setTimeout(() => {
          setMessage({ type: "invisible-msg", text: "Dummy Msg" })
        }, 5000)

        return response.json();

      }).then((data) => {
        if (data.token !== undefined) {
          localStorage.setItem("app-user", JSON.stringify(data));

          loggedData.setLoggedUser(data);
          navigate("/myapplications");
          console.log(loggedData)
        }

      })
      .catch((err) => console.log(err))

  }

  return (
    <section className="form-container">
      <form className="form-body" onSubmit={handleSubmit}>
        <p className={message.type}>{message.text}</p>
        <input className="form-input" type="email" placeholder="Email" name="email"
          value={userDetails.email} required onChange={handleInput} />
        <input className="form-input" type="password" minLength={8} placeholder="Password" name="password"
          value={userDetails.password} onChange={handleInput} />

        <button className="form-button" type="submit">Login</button>
        <p>Dont have an account? <Link to="/register" >Register</Link></p>
      </form>

    </section>
  )
}

import { Navigate } from "react-router-dom";
import { UserContext } from "../src/context/UserContext";
import { useContext } from "react";
export default function Private(props) {

  const loggedData = useContext(UserContext);


  console.log(loggedData)
  return (

    loggedData.loggedUser !== null ?
      <props.Component />
      :
      <Navigate to="/login" />

  )

}
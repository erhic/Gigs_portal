import { Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContexts";
import { useContext } from "react";
export default function Private(props) {

  const loggedData = useContext(UserContext);



  return (

    loggedData.loggedUser !== null ?
      <props.Component />
      :
      <Navigate to="/login" />

  )

}
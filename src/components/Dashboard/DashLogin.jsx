import { useState } from "react";
import axios from "axios";
import "./Form/Form.scss";
import { useHistory } from "react-router";

export default function DashLogin({ isLogin, setIsLogin }) {
  // const [email, setEmail] = useState();
  // const [loading, setLoading] = useState();
  // const [password, setPassword] = useState();
  // const [authorized, setAuthorized] = useState(false);

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleLogin = (e) => {
  //   e.preventdefault();

  //   const checkCredentials = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8081/login");
  //       console.log(response);
  //       if (response) {
  //         //data ?
  //         setAuthorized(true);
  //         setIsLogin(true);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   checkCredentials();
  // };
  let history = useHistory();

  const HandleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };

  return (
    // !authorized && (
    <div className="form-login-ctn">
      <div className="form-login">
        <form onSubmit={HandleSubmit}>
          <label htmlFor="email">
            Email :
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mary.poppins@disney.fr"
            />
          </label>
          <br />
          <label htmlFor="password">
            Password :
            <input type="password" name="name" id="name" />
          </label>
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
    // )
  );
}

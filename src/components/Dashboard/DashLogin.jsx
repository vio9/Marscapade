import { useState } from "react";
import axios from "axios";

export default function DashLogin({ isLogin, setIsLogin }) {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();
  const [password, setPassword] = useState();
  const [authorized, setAuthorized] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventdefault();

    const checkCredentials = async () => {
      try {
        const response = await axios.get("http://localhost:8080/login");
        console.log(response);
        if (response) {
          //data ?
          setAuthorized(true);
          setIsLogin(true);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    checkCredentials();
  };

  return (
    !authorized && (
      <form onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="email">
          Email :
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="mary.poppins@disney.fr"
            onChange={(e) => handleEmail(e)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Name :
          <input
            type="password"
            name="name"
            id="name"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </label>
        <br />
        <input type="submit">Submit</input>
      </form>
    )
  );
}

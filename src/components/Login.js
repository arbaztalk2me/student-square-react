import React, { useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router";
import Input from "./Input";
function Login(props) {
  let history = useHistory();
  const firebase = useFirebase();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    await firebase.login(user);
    history.replace("/");
  };
  return (
    <div className="container">
      <div className="p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card p-4">
              <form onSubmit={formSubmit}>
                <div className="row">
                  <div className="col-12 mb-3">
                    <Input
                      name="email"
                      value={user.email}
                      placeholder="enter email"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <Input
                      type="password"
                      name="password"
                      value={user.password}
                      placeholder="enter password"
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

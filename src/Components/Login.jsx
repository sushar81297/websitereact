import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../feature/counter/userSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phone, setPhone] = useState(null);
  const [pwd, setpwd] = useState(null);
  const status = useSelector((state) => state.user.status);
  const login = (e) => {
    e.preventDefault();
    dispatch(userAuth({ pwd: pwd, phone: phone }));
  };
  useEffect(() => {
    if (status === "successed") {
      navigate("/");
    }
  }, [status]);
  return (
    <div className="vh-100 mt-2">
      <form className="container w-50 mx-auto h-75 ">
        <header className="h4 text-center mt-5">Login</header>
        <div className="form-group w-75 mx-auto mt-5">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            className="form-control"
            id="phone_no"
            aria-describedby="phoneHelp"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-group w-75 mx-auto mt-5">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => setpwd(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check w-75 mx-auto mt-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="w-75 mx-auto mt-5">
          <a href="registor">Not register</a>
        </div>
        <div className=" w-75 mx-auto mt-5">
          <button onClick={login} type="submit" className="btn  btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React from "react";

function Registor() {
  return (
    <div className="vh-100 mt-2">
      <form className="container w-50 mx-auto h-75 ">
        <header className="h4 text-center mt-5">Login</header>
        <div className="form-group w-75 mx-auto mt-5">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group w-75 mx-auto mt-5">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
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
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group w-75 mx-auto mt-5">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div className="w-75 mx-auto mt-5">
          <a href="login">registered, Login</a>
        </div>
        <div className=" w-75 mx-auto mt-5">
          <button type="submit" className="btn  btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registor;

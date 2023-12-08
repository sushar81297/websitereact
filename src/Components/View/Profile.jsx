import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  if (isAuth === true) {
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.address}</p>
        <p>{user.phone}</p>
      </div>
    );
  } else {
    navigate("/login");
    return null;
  }
}

export default Profile;

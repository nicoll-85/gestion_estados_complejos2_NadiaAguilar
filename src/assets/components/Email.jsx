import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail } from "../../userSlice";

const Email = () => {
  const userData = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    console.log(e);
    dispatch(
      updateEmail({
        email: e.target.value,
      })
    );
  };

  return (
    <div>
      <label htmlFor="email">Email:{userData.email}</label>
      <input
        type="email"
        id="email"
        value={userData.email}
        onChange={handleEmailChange}
      />
    </div>
  );
};

export default Email;

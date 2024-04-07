import React from "react";

const Header = ({ user, userName }) => {
  return (
    <div>
      <h2>{user}</h2>
      <p>Usuario:{userName}</p>
    </div>
  );
};

export default Header;

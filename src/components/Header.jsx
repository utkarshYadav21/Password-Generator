import React from "react";
import { FaRegClipboard } from "react-icons/fa";

function Header({ password ,copyToClipboard}) {
  return (
    <div>
      <h2 className="heading">Password Generator</h2>
      <div className="password-div">
        <input value={password} readOnly={true} className="password-view" />
        <FaRegClipboard onClick={copyToClipboard}/>
      </div>
    </div>
  );
}

export default Header;

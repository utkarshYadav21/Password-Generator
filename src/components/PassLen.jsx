import React from "react";
import "../App.css";

function PassLen({ passLength,setLength }) {
  return (
    <div className="form-group">
      <label htmlFor="password-strength">Password length</label>
      <input
        className="pw"
        type="number"
        id="password-stregth"
        name="password-strength"
        max="26"
        min="8"
        value={passLength}
        onChange={(e) => setLength(e.target.value)}
      />
    </div>
  );
}
export default PassLen;

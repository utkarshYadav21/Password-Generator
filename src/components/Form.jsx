import React from "react";
import "../App.css"

function Form({label,name,id,checked,type,onchange}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} checked={checked} onChange={onchange}/>
    </div>
  );
}

export default Form;

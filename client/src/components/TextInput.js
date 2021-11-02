import React from 'react';
import "./componentsStyles.css"

const TextInput = ({ labelTitle, type, name, min, onChange}) => (


  <div>
    <label id={name} htmlFor="name">
      {labelTitle}
    </label>
    <input aria-labelledby={name}
      type={type}
      min={min}
      name={name}
      onChange={onChange}
      required
    />
  </div>

);

export default TextInput;
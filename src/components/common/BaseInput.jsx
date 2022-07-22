import React from "react";

export const BaseInput = ({
  type,
  label,
  name,
  value,
  changeValue,
  placeholder,
}) => {
  return (
    <div className="base-input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        value={value}
        onChange={(e) => changeValue(e.target.value, name)}
        placeholder={placeholder}
      />
    </div>
  );
};

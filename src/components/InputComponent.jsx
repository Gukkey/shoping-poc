import React from "react";

function InputComponent({
  className = "",
  id = null,
  name = null,
  placeholder,
  value = null,
  label,
  type = "text",
  labelPosition = "top",
  onChange = () => {},
  onBlur = () => {},
  inputClassName = "",
  labelClassName = "",
  required = false,
  error = null,
  touched = false,
  errorClassName = "text-red-600 max-w-2xs",
}) {
  return (
    <div
      className={`flex ${
        labelPosition === "top" ? "flex-col" : ""
      } ${className}`}
    >
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className={`border border-black h-8 rounded-lg ${inputClassName}`}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={3}
          required={required}
        />
      ) : (
        <input
          className={`border border-black h-8 rounded-lg ${inputClassName}`}
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required={required}
        />
      )}
      {touched && error ? <div className={errorClassName}>{error}</div> : null}
    </div>
  );
}

export default InputComponent;

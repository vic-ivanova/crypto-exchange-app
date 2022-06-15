import React  from "react";

const Input = ({ 
  className,
  value, 
  label, 
  name, 
  placeholder, 
  type, 
  onChange ,
  height,
  style,
  borderColor,
  background,
  width,
  padding,
  color,
}) => {

  return (
    <div className={className}>
      {label && <label htmlFor="input">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        style={{
          height: height,
          borderStyle: style,
          borderColor: borderColor,
          backgroundColor: background,
          borderWidth: width,
          color: color,
          padding: padding
        }}
      />
    </div>
  )
};

Input.defaultProps = {
  borderColor: '#5E90D8',
  border: 'none',
  height: '100%',
  width: '1px',
  style: 'solid',
  color: '#F5F5F5',
  padding: '10px'
}

export default Input;
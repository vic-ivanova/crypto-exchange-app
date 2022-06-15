import React from "react";

const Button = ({ 
  className,
  border,
  children,
  height,
  onClick, 
  radius,
  width,
  cursor,
  bgCol
}) => { 
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        border,
        borderRadius: radius,
        height,
        width,
        cursor,
        backgroundColor: bgCol
      }}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  border: 'none',
  radius: 'none',
  height: '56px',
  width: '56px',
  cursor: 'pointer'
}

export default Button;
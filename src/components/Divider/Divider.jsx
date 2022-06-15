import React from "react";

const Divider = ({ 
  margin,
  width,
  style,
  color,
  bottomWidth,
}) => { 
  return (
    <hr style={{
      margin: margin,
      borderWidth: width,
      borderColor: color,
      borderStyle: style,
      borderBottomWidth: bottomWidth
    }} />
  );
}

Divider.defaultProps = {
  margin: '0',
  width: '0',
  style: 'solid',
  color: 'rgba(0, 0, 0, 0.12)',
  bottomWidth: 'thin'
}

export default Divider;
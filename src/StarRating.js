import React from "react";
    const containerStyle = {
      display: "flex",
      alignItems: "Center",
      gap: "10px",
};
    
const starContainerStyle = {
    display: "flex",
    gap:"4px"
}
const textStyle = {
    lineHeight: "1",
    margin:"0"
}


function StarRating() {


  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>

      <p style={textStyle}>10</p>
    </div>
  );
}

export default StarRating;

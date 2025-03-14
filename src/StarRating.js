import React, { useState } from "react";
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
  const [rating, setRating] = useState()


  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: 5 }, (_, i) => (
          <span><Star/> </span>
        ))}
      </div>

      <p style={textStyle}>10</p>
    </div>
  );
}

export default StarRating;

const starStyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor:"pointer"
  

}


function Star() {
  return (
    <div style={starStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#000"
        stroke="#000"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  );


}

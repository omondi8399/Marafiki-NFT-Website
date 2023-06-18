import * as React from "react";
// import DrawSVGPlugin from "gsap-trial/dist/DrawSVGPlugin";

const Vector = ({ progress = 0, ...props }) => {

  return (
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={2047}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      d="M26 0v314c-14 0-25 12-25 25s10 25 25 25 25-11 25-25-23-21-25 0v315.5c-12.5 0-25 9.5-25 24.5s11 24 25 24 24.5-10.5 24.5-24c-1.27-14.633-24.5-19-24.5 0v315.5c-12.5 0-25 9-25 24.5s11.346 25.15 25 24.5c10.516-.5 24.485-8.32 24.5-24.5.015-16.18-22.004-18.36-24.5 0v319c-13 0-25 10.5-25 25s12.5 25 25 25 24.942-6.81 25-25c.058-18.19-25-17-25 0v315.5c-13.5 0-25 9-25 24.5s13 24.5 25 24.5 24.5-8.5 24.5-24.5-24.5-16-24.5 0v346"
    />
  </svg>  );
};

export default Vector;

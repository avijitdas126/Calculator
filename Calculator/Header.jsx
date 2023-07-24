import React, { useState } from "react";
import "./style.css";
import Body from "./Body";
const Header = () => {
  const [header, setheader] = useState("");
  const data = (val) => {
    switch (val) {
      case "Del":
        if (header.length > 0) {
          let a = header.length;
          a = header.slice(0, a - 1);
          setheader(a);
        }
        break;
      case "C":
        setheader("");
        break;
      case "=":
        if (header.length > 0) {
          let result = eval(header);
          result = result.toFixed(2);
          setheader(result);
        } else {
          return header;
        }
        break;
      default:
        let b = " ";
        setheader((pr) => (pr += val));
        b = b + val;
        console.log(b);
        break;
    }
  };
  return (
    <>
    <div className="card">
      <div className="screen">{header.length == 0 ? "0" : header}</div>

      <Body ondata={data} />
      </div>
    </>
  );
};

export default Header;

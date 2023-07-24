import React, { useState } from "react";
import "./style.css";
import Body from "./Body";
const Header = () => {
  const [data1, setdata1] = useState([]);
  const [header, setheader] = useState("");
  const data = (val) => {
    switch (val) {
      case "C":
        setdata1([])
        setheader("");
        break;
      case "=":
        if (header.length > 0) {

          let result = eval(header);
          setheader(result);
          data1.push(result);
        } else {
          return header;
        }

        break;
      default:
        data1.push(val);
        setheader((pr) => (pr += val));
        break;
    }
    //   if (val == "C") {
    //
    //   }
    //   if (val == "=") {
    //     let result = eval(header);
    //     setheader(result);
    //   }
    //  else {
    //     setheader((pr) => (pr += val));
    //   }
  };
  //    let b=-1;
  // const [b,setb]=useState(-1)
  //    for(let i=0; i<data1.length;i++)
  //    {
  //     for(let i=0; i<data1.length;i++)
  //     {
  //         if(i>b)
  //         {
  //             console.log(data1[i]);
  //             setb(i);

  //         }
  //         else
  //         continue;

  //     }
  //    }
  // console.log(header);
  return (
    <>
    {console.log(header)}
      <div className="screen">
        {header.length == 0 || data1.length == 0 ? "0" : header}
      </div>

      <Body ondata={data} />
    </>
  );
};

export default Header;

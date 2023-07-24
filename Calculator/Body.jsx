import React from "react";
import "./style.css";
const Body = (props) => {
    const handle=(e)=>{
       props.ondata(e.target.value);
    }
  return (
    <>
      <div className="buttoms">
        <button value={'C'} onClick={handle}>C</button>
        <button value={')'} onClick={handle}>)</button>
        <button value={'Del'} onClick={handle}>Del</button>
        <button value={'/'} onClick={handle}>/</button>
        <button value={7} onClick={handle}>7</button>
        <button value={8} onClick={handle}>8</button>
        <button value={9} onClick={handle}>9</button>
        <button value={'*'} onClick={handle}>*</button>
        <button value={4} onClick={handle}>4</button>
        <button value={5} onClick={handle}>5</button>
        <button value={6} onClick={handle}>6</button>
        <button value={'-'} onClick={handle} >-</button>
        <button value={1} onClick={handle}>1</button>
        <button value={2} onClick={handle}>2</button>
        <button value={3} onClick={handle}>3</button>
        <button value={'+'} onClick={handle}>+</button>
        <button value={0} onClick={handle}>0</button>
        <button value={'('} onClick={handle} >(</button>
        <button value={'.'} onClick={handle}>.</button>
        <button value={'='} onClick={handle}>=</button>
      </div>
    </>
  );
};

export default Body;

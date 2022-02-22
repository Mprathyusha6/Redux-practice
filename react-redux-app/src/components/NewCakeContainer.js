import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const NewCakeContainer = (props) => {
    const [number,setnumber]=useState('')
  return (
    <div>
      <h1>Number of Cakes-{props.numOfCakes}</h1>
<input type='text' placeholder="Enter number of cakes" onChange={(e)=>setnumber(e.target.value)} />
      <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);

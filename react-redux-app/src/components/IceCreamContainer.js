import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
     
  return (
    <div>
      <h1>Number of IceCream-{props.numberOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
     
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
     
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

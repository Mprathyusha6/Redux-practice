import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (<div><p>ItemContainer {props.ItemName}-{props.itemS}</p>
  <button onClick={props.buyItem}>Buy {props.ItemName}</button>
   </div>)
}

const mapStateToProps = (state, ownProps) => {
    
    const itemName=ownProps.cake?'Cake':'Ice Cream';
  const itemState = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCream;
  return { itemS: itemState,
ItemName:itemName };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {buyItem: dispatchFunction};
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

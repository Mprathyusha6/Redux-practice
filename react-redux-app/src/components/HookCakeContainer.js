import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from "../redux";

function HookCakeContainer() {
   const numOfCakes= useSelector(state=>state.cake.numberOfCakes)
  const dispatch=useDispatch()
   return (
    <div>
      <h1>Num of cakes - {numOfCakes} </h1>
      <button onClick={()=>dispatch(buyCake())}>BUY CAKE</button>
    </div>
  );
}

export default HookCakeContainer;

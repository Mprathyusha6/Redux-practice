import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer({userData,FetchUsers}) {
useEffect(()=>{
    FetchUsers()
},[])

 
  return  userData.loading?(<h1>Loading....</h1>):userData.error?(<h1>{userData.error}</h1>):(<h1>success</h1>);
}

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    userData: state.users,
  };
};
// const mapDispatchToProps = () => {
//     return {
//       FetchUsers: () => fetchUsers(),
//     };
//   };

const mapDispatchToProps = (dispatch) => {
  return {
    FetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

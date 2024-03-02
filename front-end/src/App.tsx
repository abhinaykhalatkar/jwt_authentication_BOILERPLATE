import React from 'react';
import './App.scss';
import {LogIn} from './Pages/LogIn/LogIn';
// import { RootState } from './store/store'
// import { useDispatch, useSelector } from "react-redux";
// import {addUser,removeUser} from "./store/slices/userInfoSlice"

function App() {
  // const userInfo: UserInfo = useSelector(
  //   (state: RootState) => state.userInfo
  // );
  // const dispatch = useDispatch();

  return (
    <div className="App"> 
    <LogIn />
    </div>
  );
}

export default App;

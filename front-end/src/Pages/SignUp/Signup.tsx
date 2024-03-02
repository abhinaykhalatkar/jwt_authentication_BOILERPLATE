import React,{useState,useEffect} from 'react';
import './Signup.scss';
import {addUser} from "../../store/slices/userInfoSlice"
import {RootState} from "../../store/store"
import { useDispatch ,useSelector} from "react-redux";



export const Signup:React.FC=(props) =>{
  const userInfo: UserInfo = useSelector(
    (state: RootState) => state.userInfo
  );
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(userInfo); 
    }, [userInfo]); 
  
  
    return (
      <div>
        Signup
      </div>
    );
  };
  

  export default Signup;

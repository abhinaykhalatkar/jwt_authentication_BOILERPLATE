import React,{useState,useEffect} from 'react';
import './Live.scss';
import {addUser} from "../../store/slices/userInfoSlice"
import {RootState} from "../../store/store"
import { useDispatch ,useSelector} from "react-redux";



const Live:React.FC=(props) =>{
  const userInfo: UserInfo = useSelector(
    (state: RootState) => state.userInfo
  );
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(userInfo); 
    }, [userInfo]); 
  
  
    return (
      <div>
Live
      </div>
    );
  };

  export default Live;
  
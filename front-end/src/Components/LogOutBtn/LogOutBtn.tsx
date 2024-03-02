import "./LogOutBtn.scss";
import { removeUser } from "../../store/slices/userInfoSlice";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";

export const LogOutBtn: React.FC = () => {
  const userInfo: UserInfo = useSelector((state: RootState) => state.userInfo);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      {userInfo.isLoggedIn && <button onClick={logOutHandler}>LogOut</button>}
    </div>
  );
};

export default LogOutBtn;

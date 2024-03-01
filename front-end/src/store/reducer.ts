import * as actionTypes from "./actionTypes";

const initialState: UserInfo = {
  isLoggedIn: true,
  userEmail: "abhinay@test.com",
};
const reducer = (
  state: UserInfo = initialState,
  action: UserInfoAction
): UserInfo => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        isLoggedIn: action.userInfo.isLoggedIn,
        userEmail: action.userInfo.userEmail,
      };

    case actionTypes.REMOVE_USER:
      return { isLoggedIn: false, userEmail: "" };
  }
  return state;
};

export default reducer;

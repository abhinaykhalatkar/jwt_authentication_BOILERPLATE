import * as actionTypes from "./actionTypes";

export function addUser(userInfo: UserInfo) {
  const action: UserInfoAction = {
    type: actionTypes.ADD_USER,
    userInfo,
  };

  return simulateHttpRequest(action);
}

export function removeArticle(userInfo: UserInfo) {
  const action: UserInfoAction = {
    type: actionTypes.REMOVE_USER,
    userInfo,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: UserInfoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

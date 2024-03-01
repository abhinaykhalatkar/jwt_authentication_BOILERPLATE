interface UserInfo {
  isLoggedIn: boolean;
  userEmail: string;
}

type UserInfoAction = {
  type: string;
  userInfo: UserInfo;
};

type DispatchType = (args: UserInfoAction) => UserInfoAction;

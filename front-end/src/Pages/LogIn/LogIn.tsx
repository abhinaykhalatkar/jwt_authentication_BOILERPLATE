import React, { useState, useEffect } from "react";
import "./LogIn.scss";
import { addUser } from "../../store/slices/userInfoSlice";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosResponse, AxiosError } from "axios";

interface FormInputs {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const userInfo: UserInfo = useSelector((state: RootState) => state.userInfo);
  const [values, setValues] = useState<FormInputs>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_LINK!,
        values
      );

      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {}, [userInfo]);

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(
    //   addUser({
    //     isLoggedIn: values.email ? true : false,
    //     userEmail: values.email,
    //   })
    // );
    postData();
    // setValues({ email: "", password: "" });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div></div>
      </form>
    </div>
  );
};

export default LogIn;

import React, { useState, useEffect } from "react";
import "./Signup.scss";
import { addUser } from "../../store/slices/userInfoSlice";
// import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  passwordRe: string;
}

export const Signup: React.FC = () => {
  // const userInfo: UserInfo = useSelector((state: RootState) => state.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState<SignupFormInputs>({
    name: "",
    email: "",
    password: "",
    passwordRe: "",
  });
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // setIsPasswordMatched(values.password === values.passwordRe);
  };

  const registerHandler = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_SIGNUP_LINK!, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        const token = response.headers["authorization"]
          ? response.headers["authorization"].split(" ")[1]
          : "";
        localStorage.setItem(process.env.REACT_APP_T0509!, token);
        dispatch(
          addUser({
            isLoggedIn: response.data.hasOwnProperty("name"),
            userEmail: response.data.email,
          })
        );
        navigate("/");
      } else if (response.status === 400) console.log(response.data.message);
      else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setIsPasswordMatched(
      values.password === values.passwordRe &&
        values.password !== "" &&
        values.password.length > 7
    );
  }, [values]);

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerHandler();

    // setValues({ email: "", password: "" });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>UserName:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <div>
          <label>Repeate Password:</label>
          <input
            type="password"
            name="passwordRe"
            value={values.passwordRe}
            onChange={handleChange}
            required
          />
        </div>
        <button disabled={!isPasswordMatched} type="submit">
          Sign-Up
        </button>
        <div></div>
      </form>
    </div>
  );
};

export default Signup;

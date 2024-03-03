import "./App.scss";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Live from "./Pages/Live/Live";
import Signup from "./Pages/SignUp/Signup";
import { RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import LogOutBtn from "./Components/LogOutBtn/LogOutBtn";
import CallbackPage from "./Pages/Callback/CallbackPage";

function App() {
  const userInfo: UserInfo = useSelector((state: RootState) => state.userInfo);
  return (
    <div className="App">
      <LogOutBtn />
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/live">Live</Link>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </ul>
      </nav>

      <Routes>
        <Route path="/" caseSensitive element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route
          path="/live"
          element={userInfo.isLoggedIn ? <Live /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

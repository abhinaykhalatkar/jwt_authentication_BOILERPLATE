import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CallbackPage = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const email = params.get("email");
    const username = params.get("username");

    // Now you can use the token and other information as needed
    console.log("Token:", token);
    console.log("Email:", email);
    console.log("Username:", username);
  }, [location]);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Processing...</p>
    </div>
  );
};

export default CallbackPage;

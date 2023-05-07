import React from "react";
import useAuth from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = useAuth();
  if (user.code == "") return <Navigate to="/" replace />;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;

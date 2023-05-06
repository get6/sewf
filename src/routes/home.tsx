import React from "react";
import useAuth from "../hooks/use-auth";
import { redirect } from "react-router";

const Home = () => {
  const user = useAuth();
  if (!user) redirect("/");

  return <div></div>;
};

export default Home;

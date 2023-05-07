import React from "react";
import useAuth from "../hooks/use-auth";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";

const Home = () => {
  const user = useAuth();
  if (user.code == "") return <Navigate to="/" replace />;

  return (
    <Container maxWidth="xl">
      <h1>Home</h1>
    </Container>
  );
};

export default Home;

import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";

const LoadingPage = () => {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default LoadingPage;

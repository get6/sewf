import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useAuth from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  let auth = useAuth();

  const handleClick = () => {
    console.log(auth.code);
    if (auth.code == "sewf") {
      navigate("/home");
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      sx={{
        // backgroudnImage: `url(${process.env.PUBLIC_URL}/main-korea.jpg)`,
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
        md={6}
      >
        <Typography variant="h1">건곤감리</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required
          helperText="💡 42born2code 슬랙에 공유된 입장코드를 입력하세요."
          label="Secret code"
          placeholder="Code"
          variant="outlined"
          type="text"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => auth.signin(e.target.value, () => {})}
          onKeyDown={handleEnter}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button variant="contained" onClick={handleClick}>
          입장하기
        </Button>
      </Grid>
    </Grid>
  );
};

export default Root;

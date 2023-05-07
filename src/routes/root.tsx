import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useAuth from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";
import bg from "../images/main-korea.jpg";

const Root = () => {
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  let auth = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    auth.signin(e.target.value, () => {});
  };

  const handleClick = () => {
    if (auth.code == process.env.REACT_APP_SECRET_CODE) {
      navigate("home");
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Box
      sx={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            rowSpacing={2}
            padding={2}
            boxShadow={10}
            borderRadius={3}
            bgcolor={"rgba(255,255,255,0.9)"}
          >
            <Grid item>
              <Typography variant="h1">건곤감리</Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                helperText="💡 42born2code 슬랙에 공유된 입장코드를 입력하세요."
                label="Secret code"
                placeholder="Code"
                variant="outlined"
                type="text"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                onKeyDown={handleEnter}
                error={error}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleClick}>
                입장하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Root;

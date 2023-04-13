import { CardMedia, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Player } from "@lottiefiles/react-lottie-player";
import theme from "../Styles/Styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AuthLayout = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "bg",
        position: "relative",
      }}
    >
      {/* Grid System  */}
      <Grid container position="relative" minHeight="100vh">
        {/* Lottie Palyer  */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
              position: "absolute",
              width: "100%",
              left: "0",
              top: "0",
              height: "100%",
            },
          }}
        >
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_jcsfwbvi.json"
            style={{ height: "100%", width: "100%" }}
          ></Player>
        </Grid>
        {/* Login Form  */}
        <Grid
          item
          xs={12}
          md={6}
          py={"50px"}
          px={"30px"}
          backgroundColor="light.main"
          color="main"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Form Container With Shadow */}
          <Paper
            elevation={2}
            sx={{
              maxWidth: 450,
              width: "100%",
              mx: "auto",
              p: "30px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Logo Container With Shadow */}
            <Paper
              elevation={1}
              sx={{
                width: 200,
                height: 200,
                mx: "auto",
                borderRadius: "50%",
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={logo}
                alt="logo"
                sx={{ width: 200 }}
              />
            </Paper>

            {children}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;

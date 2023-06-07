import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserReports } from "../store/features/auth/thunks/authThunks";

const PaymentSuccess = () => {
  const { patientId } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (patientId) {
      dispatch(getUserReports(patientId));
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            mx: "auto",
            boxShadow: "0 0 2px rgba(0,0,0,.2)",
            p: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography component={"h4"} variant="h4">
            Successful Payment
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentSuccess;

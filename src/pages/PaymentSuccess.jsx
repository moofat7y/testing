import { Box, Container, Typography } from "@mui/material";
import React from "react";

const PaymentSuccess = () => {
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

import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { LoadingButton } from "@mui/lab";
const PricingItem = ({ bouquet, index }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onPay = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}/Payment/CreateCheckoutSession?bouquetId=${bouquet.id}`
      );
      setIsLoading(false);
      window.open(response.data.result.sessionUrl, "_blank");
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Grid
      item
      key={bouquet.name}
      xs={12}
      sm={bouquet.name === "Enterprise" ? 12 : 6}
      md={4}
    >
      <Card
        sx={
          index === 1
            ? {
                background:
                  "linear-gradient(to left, var(--main-color),var(--text-secondary))",
                p: "25px",
                backgroundColor: " #8EC5FC",
                color: "#fff",
                backgroundImage:
                  "linear-gradient( 109.6deg, rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% )",
              }
            : null
        }
      >
        <CardHeader
          title={bouquet.name}
          //   subheader={bouquet.subheader}
          titleTypographyProps={{ align: "center" }}
          action={bouquet.name === "Pro" ? <StarIcon /> : null}
          subheaderTypographyProps={{
            align: "center",
          }}
          sx={
            index !== 1
              ? {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }
              : {
                  "& .MuiTypography-body1 ": {
                    color: "#fff",
                  },
                }
          }
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              mb: 2,
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              sx={
                index === 1
                  ? {
                      color: "#fff",
                    }
                  : null
              }
            >
              ${bouquet.price}
            </Typography>
            <Typography variant="h6" color="inherit">
              /mo
            </Typography>
          </Box>
          {/* <ul> */}
          {/* {bouquet.description.map((line) => ( */}
          <Typography component="li" variant="subtitle1" align="center">
            {bouquet.description}
          </Typography>
          {/* ))} */}
          {/* </ul> */}
        </CardContent>
        <CardActions>
          <LoadingButton
            fullWidth
            loading={isLoading}
            variant="outlined"
            color={`${index == 1 ? "light" : "primary"}`}
            onClick={() => {
              onPay();
            }}
          >
            Get Started
          </LoadingButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PricingItem;

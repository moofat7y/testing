import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { getAllPricingBouquets } from "../../store/features/pricing/PricingThunks";
import PricingItem from "./PricingItem";
import { Skeleton } from "@mui/material";

const PricingList = () => {
  const dispatch = useDispatch();
  const { bouquets, isLoading } = useSelector((state) => state.bouquet);

  useEffect(() => {
    dispatch(getAllPricingBouquets());
  }, []);

  const tiers = bouquets?.map((bouquet, index) => {
    return <PricingItem key={bouquet?.id} bouquet={bouquet} index={index} />;
  });
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {/* {tiers.map((tier, index) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
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
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
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
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="inherit">
                    /mo
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={tier.buttonVariant}
                  color={`${index == 1 ? "light" : "primary"}`}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))} */}
        {isLoading ? (
          <>
            <Grid item xs={12} md={4}>
              <Skeleton animation="wave" height={60} />
              <Skeleton animation="wave" height={80} />
              <Skeleton variant="rounded" animation="wave" height={60} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Skeleton animation="wave" height={60} />
              <Skeleton animation="wave" height={80} />
              <Skeleton variant="rounded" animation="wave" height={60} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Skeleton animation="wave" height={60} />
              <Skeleton animation="wave" height={80} />
              <Skeleton variant="rounded" animation="wave" height={60} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </Grid>
          </>
        ) : (
          tiers
        )}
      </Grid>
    </Container>
  );
};

export default PricingList;

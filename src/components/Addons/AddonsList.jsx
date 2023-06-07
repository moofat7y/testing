import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { getAllBouquetsAdons } from "../../store/features/addons/AddonsThunks";
import { Skeleton } from "@mui/material";
import AddonItem from "./AddonItem";

const AddonsList = () => {
  const dispatch = useDispatch();
  const { addons, isLoading } = useSelector((state) => state.addons);

  useEffect(() => {
    dispatch(getAllBouquetsAdons());
  }, []);

  const tiers = addons?.map((addon, index) => {
    return <AddonItem key={addon?.id} addon={addon} index={index} />;
  });
  return (
    <Container maxWidth="xl" component="main">
      <Grid container spacing={5} alignItems="flex-end">
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

export default AddonsList;

import { Box, Button, Container, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomSkeleton from "../components/CustomSkeleton";
import AddTime from "../components/Times/AddTime";
import TimesTable from "../components/Times/TimesTable";
import { getStaffTimes } from "../store/features/times/timesThunks";

const Times = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { times, isLoading } = useSelector((state) => state.times);
  const { user } = useSelector((state) => state.auth);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getStaffTimes(user?.userId));
  }, []);
  console.log(times);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: "100px ",
        pt: "200px",
      }}
    >
      <Container maxWidth="xl">
        {isLoading ? <CustomSkeleton /> : <TimesTable rows={times} />}
        <Button
          sx={{ mt: "30px" }}
          color="success"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          اضافة وقت
        </Button>
      </Container>
      <AddTime open={open} setOpen={setOpen} />
    </Box>
  );
};

export default Times;

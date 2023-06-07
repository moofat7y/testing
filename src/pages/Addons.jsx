import * as React from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import PaymentModal from "../components/Pricing/PaymentModal";
import { useCallbackPrompt } from "../hooks/useCallbackPrompt";
import DialogBox from "../components/Pricing/DialogBox";
import { updateAvailableTimes } from "../store/features/AvilableTimes/AvailableTimesThunks";
import PricingList from "../components/Pricing/PricingList";
import { useDispatch } from "react-redux";
import AddonsList from "../components/Addons/AddonsList";

const Addons = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showPrompt, confirmNavigation, cancelNavigation] =
    useCallbackPrompt(showDialog);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (state) {
      setShowDialog(true);
    }
    // if (!state) {
    //   navigate("/", { replace: true });
    // }
    // const handleLeave = (e) => {
    //   console.log("leaving", e);
    //   dispatch(
    //     updateAvailableTimes({ timeId: state.timeId, status: "Available" })
    //   );
    //   window.history.replaceState({}, document.title);
    // };
    // window.addEventListener("beforeunload", handleLeave);
    // return () => {
    //   window.removeEventListener("beforeunload", handleLeave);
    // };
  }, []);
  const confirm = () => {
    dispatch(
      updateAvailableTimes({ timeId: state.timeId, status: "Available" })
    );
    confirmNavigation();
  };
  return (
    <>
      <DialogBox
        // @ts-ignore
        showDialog={showPrompt}
        confirmNavigation={confirm}
        cancelNavigation={cancelNavigation}
      />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="xl"
        component="main"
        sx={{ py: "100px" }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Addons
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          quasi temporibus sed optio quisquam! Impedit voluptatibus aliquid
          voluptatum incidunt illo?
        </Typography>
      </Container>
      {/* End hero unit */}
      <AddonsList />
      {/* <PaymentModal
        open={open}
        setOpen={setOpen}
        setShowDialog={setShowDialog}
      /> */}
    </>
  );
};

export default Addons;

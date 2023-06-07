import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Container } from "@mui/system";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateAvailableTimes } from "../../store/features/AvilableTimes/AvailableTimesThunks";
import { useLocation } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PaymentModal = ({ open, setOpen, setShowDialog }) => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(false);
    console.log("submit");
    dispatch(
      updateAvailableTimes({ timeId: state.timeId, status: "Reserved" })
    );
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Payment Form
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField />
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </Dialog>
  );
};
export default PaymentModal;

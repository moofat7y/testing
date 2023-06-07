import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactDOM from "react-dom";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  createReportVideoChat,
  updateAvailableTimes,
} from "../../store/features/AvilableTimes/AvailableTimesThunks";
import { onSessionCreate } from "../../store/features/auth/authSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({ open, handleClose, date }) => {
  const { patientId } = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = React.useState(false);
  const countDownDate = new Date(date);
  const dispatch = useDispatch();
  countDownDate.setSeconds(countDownDate.getSeconds() + 10);

  const [sec, setSec] = React.useState(10);

  React.useEffect(() => {
    if (open.open) {
      if (sec <= 0) {
        handleClose();
        dispatch(
          updateAvailableTimes({ timeId: open.data, status: "Available" })
        );
        setSec(10);
        return;
      }
      const timeId = setInterval(() => {
        setSec((prev) => countDownDate.getSeconds() - new Date().getSeconds());
      }, 1000);

      return () => clearInterval(timeId);
    }
  }, [countDownDate]);

  React.useEffect(() => {
    setSec(10);
    // if (state) {
    //   setShowDialog(true);
    // }
    // if (!state) {
    //   navigate("/", { replace: true });
    // }
    if (open.open) {
      const handleLeave = (e) => {
        console.log("leaving", e);
        dispatch(
          updateAvailableTimes({ timeId: open.data, status: "Available" })
        );
        window.history.replaceState({}, document.title);
      };
      window.addEventListener("beforeunload", handleLeave);
      return () => {
        window.removeEventListener("beforeunload", handleLeave);
      };
    }
  }, [open.open]);

  const handleSubmit = async () => {
    setIsLoading(true);
    await dispatch(
      createReportVideoChat({ patientId: patientId, timeId: open.data })
    );
    setIsLoading(false);
    handleClose();
  };

  return ReactDOM.createPortal(
    <Modal
      disableAutoFocus
      open={open.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          تاكيد الحجز
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          هل انت متاكد من اختيارك ؟ {sec}
        </Typography>
        <LoadingButton
          type="button"
          onClick={() => handleSubmit()}
          sx={{
            marginTop: "10px",
            minWidth: "150px",
            fontWeight: "600",
            fontSize: "16px",
          }}
          loading={isLoading}
          variant="contained"
        >
          <span>تاكيد</span>
        </LoadingButton>
      </Box>
    </Modal>,
    document.getElementById("dialog")
  );
};

export default ConfirmModal;

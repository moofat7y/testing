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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { notifyError } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addTimeThunk } from "../../store/features/times/timesThunks";
import ReusableDialog from "./ReusableDialog";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddTime = ({ open, setOpen }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const handleDateChange = (e) => {
    let onlyDate = e.$d.toISOString();
    setSelectedDate(onlyDate);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data) => {
    if (!selectedDate) {
      notifyError("Please select date and time");
      return;
    }
    dispatch(
      addTimeThunk({
        ...data,
        availableTime: selectedDate,
        staffId: user.userId,
      })
    ).then(() => {
      reset(
        {
          availableTimeDay: null,
          availableTimeMonth: null,
        },
        {
          keepErrors: false,
          keepDirty: false,
        }
      );
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    });
  };
  return (
    <ReusableDialog
      open={open}
      handleClose={handleClose}
      Transition={Transition}
      titleText="اضافة وقت"
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      submitText="اضافة"
      errors={errors}
    />
  );
};
export default AddTime;

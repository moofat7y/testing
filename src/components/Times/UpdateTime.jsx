import * as React from "react";

import Slide from "@mui/material/Slide";

import { useForm } from "react-hook-form";
import { notifyError } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  getStaffTimes,
  updateTimeThunk,
} from "../../store/features/times/timesThunks";
import ReusableDialog from "./ReusableDialog";
import dayjs from "dayjs";
import { useState } from "react";
import { useEffect } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpdateTime = ({ open, setOpen, time }) => {
  const converterTime = dayjs(time?.availableTime);

  console.log(time);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setSelectedDate(time?.availableTime);
  }, [open]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleDateChange = (e) => {
    // console.log(e);
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
      updateTimeThunk({
        newAvailableTimeDay: data.availableTimeDay,
        newAvailableTimeMonth: data.availableTimeMonth,
        newAvailableTime: selectedDate,
        timeId: time?.timeId,
      })
    ).then(() => {
      setTimeout(() => {
        dispatch(getStaffTimes(user?.userId));
        setOpen(false);
      }, 2000);
    });
  };
  return (
    <ReusableDialog
      open={open}
      handleClose={handleClose}
      Transition={Transition}
      titleText="تعديل وقت"
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      submitText="تعديل"
      errors={errors}
      values={time}
      converterTime={converterTime}
      setValue={setValue}
    />
  );
};
export default UpdateTime;
// <Dialog
//   fullScreen
//   open={open}
//   onClose={handleClose}
//   TransitionComponent={Transition}
// >
//   <AppBar sx={{ position: "relative" }}>
//     <Container maxWidth="xl">
//       <Toolbar>
//         <IconButton
//           edge="start"
//           color="inherit"
//           onClick={handleClose}
//           aria-label="close"
//         >
//           <CloseIcon />
//         </IconButton>
//         <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//           اضافة وقت
//         </Typography>
//       </Toolbar>
//     </Container>
//   </AppBar>
//   <Container maxWidth="xl">
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: 600,
//         mx: "auto",
//         my: "200px",
//         "& .MuiPickersLayout-root": {
//           display: "flex",
//           flexWrap: "wrap",
//         },
//       }}
//       dir="ltr"
//     >
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <StaticDateTimePicker
//           orientation="landscape"
//           onChange={handleDateChange}
//           sx={{
//             "& .MuiDialogActions-root.MuiDialogActions-spacing.MuiPickersLayout-actionBar":
//               {
//                 display: "none",
//               },
//           }}
//         />
//       </LocalizationProvider>
//       <Box>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             type="number"
//             {...register("availableTimeMonth", {
//               required: "This field is required",
//               valueAsNumber: true,
//               pattern: {
//                 value: /^(0|[1-9]\d*)(\.\d+)?$/,
//                 message: "Please enter a valid number",
//               },
//             })}
//             defaultValue={time?.availableTimeMonth}
//             error={errors.availableTimeMonth}
//             helperText={errors.availableTimeMonth?.message}
//             label="availableTimeMonth"
//             fullWidth
//             sx={{
//               my: "30px",
//             }}
//           />
//           <TextField
//             type="number"
//             defaultValue={time?.availableTimeDay}
//             {...register("availableTimeDay", {
//               required: "This field is required",
//               valueAsNumber: true,
//               pattern: {
//                 value: /^(0|[1-9]\d*)(\.\d+)?$/,
//                 message: "Please enter a valid number",
//               },
//             })}
//             fullWidth
//             sx={{
//               my: "30px",
//             }}
//             label="availableTimeDay"
//             error={errors.availableTimeDay}
//             helperText={errors.availableTimeDay?.message}
//           />
//           <Button type="submit" variant="contained">
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   </Container>
// </Dialog>

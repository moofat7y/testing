import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTimeThunk,
  getAllTimes,
} from "../../store/features/times/timesThunks";
const ConfirmDialog = ({ open, setOpen, deletedTimeId }) => {
  const { userId } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTimeThunk(deletedTimeId)).then(() => {
      setTimeout(() => {
        dispatch(getAllTimes(staffId));
        setOpen(false);
      }, 1000);
    });
  };
  return (
    <Dialog open={open} maxWidth="sm" fullWidth onClose={() => setOpen(false)}>
      <DialogTitle>Confirm the action</DialogTitle>

      <DialogContent>
        <Typography>Do You Want to Delete Time ?</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button color="error" variant="contained" onClick={handleDelete}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

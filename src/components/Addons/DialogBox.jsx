import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const DialogBox = ({ showDialog, cancelNavigation, confirmNavigation }) => {
  return (
    <Dialog
      open={showDialog}
      onClose={cancelNavigation}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <b>There are some changes?</b>
          <br /> Are you sure you want to navigate!!!!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelNavigation} color="primary" variant="contained">
          No
        </Button>
        <Button
          onClick={confirmNavigation}
          autoFocus
          color="error"
          variant="contained"
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogBox;

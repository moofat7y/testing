import { Box, Button, Paper, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();
  const handleNavRoom = useCallback(
    (e) => {
      e.preventDefault();
      if (!roomId) return;
      navigate(`/room/${roomId}`);
    },
    [navigate, roomId]
  );
  return (
    <Box
      py={"90px"}
      minHeight={"56vh"}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      <Paper
        elevation={4}
        sx={{ padding: "20px", maxWidth: "500px", width: "100%" }}
      >
        <form onSubmit={handleNavRoom}>
          <TextField
            id="Room_id"
            label="أدخل رقم الغرفة"
            variant="outlined"
            fullWidth
            type="number"
            sx={{
              "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button ":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
            }}
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "15px",
            }}
          >
            انضم الان
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Rooms;

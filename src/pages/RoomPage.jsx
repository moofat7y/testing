import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// const appID = Number(import.meta.env.VITE_appID);
// const serverSecret = import.meta.env.VITE_serverSecret;
function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}
function generateToken(tokenServerUrl, userID) {
  // Obtain the token interface provided by the App Server
  return fetch(
    `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

const RoomPage = () => {
  const { id } = useParams();
  const userID = randomID(5);
  const userName = randomID(5);
  const myMeeting = async (element) => {
    // generate token
    // generate Kit Token
    const appID = Number(import.meta.env.VITE_appID);
    const serverSecret = import.meta.env.VITE_serverSecret;
    fetch("https://nextjs-zegocloud-uikits-eta.vercel.app/api/token", {
      method: "post",
      body: JSON.stringify({
        userID,
        expiration: 7200,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then(async ({ token }) => {
        const { ZegoUIKitPrebuilt } = await import(
          "@zegocloud/zego-uikit-prebuilt"
        );
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
          appID,
          token,
          id,
          userID,
          userName()
        );
        // create instance object from token
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
        zp.joinRoom({
          container: element,
          videoResolutionList: [
            ZegoUIKitPrebuilt.VideoResolution_360P,
            ZegoUIKitPrebuilt.VideoResolution_180P,
            ZegoUIKitPrebuilt.VideoResolution_480P,
            ZegoUIKitPrebuilt.VideoResolution_720P,
          ],
          videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P,
          sharedLinks: [
            {
              name: "Personal link",
              url: window.location.origin + window.location.pathname,
            },
          ],
          maxUsers: 2,
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
          useFrontFacingCamera: true,
          showRemoveUserButton: true,
          showPinButton: true,
        });
        // generateToken(
        // "https://nextjs-zegocloud-uikits-eta.vercel.app/api/token",
      });
  };
  return (
    <Box
      minHeight={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent={"center"}
    >
      <Paper
        elevation={4}
        sx={{ padding: "20px", width: "100%", height: "100vh" }}
        ref={myMeeting}
      ></Paper>
    </Box>
  );
};

export default RoomPage;

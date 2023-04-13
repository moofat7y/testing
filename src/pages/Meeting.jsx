import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../api";
import JoinScreen from "../components/Meeting/JoinScreen";
import MeetingView from "../components/Meeting/MeetingView";

// function JoinScreen() {
//   return null;
// }

// function ParticipantView(props) {
//   return null;
// }

// function Controls(props) {
//   return null;
// }

// function MeetingView(props) {
//   return null;
// }

function Meeting() {
  const [meetingId, setMeetingId] = useState(null);
  const webcamRef = useRef(null);
  const micRef = useRef(null);
  //Getting the meeting id by calling the api we just wrote
  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  //This will set Meeting Id to null when meeting is left or ended
  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: "C.V. Raman",
      }}
      token={authToken}
    >
      <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} />
  );
}

export default Meeting;

import { useState } from "react";
import "./App.css";
import MeetingRoomDetails from "./meeting-room-details/MeetingRoomDetails";
import { MeetingRoomListPage as MeetingRoomList } from "./meeting-room/MeetingRoom";
import { IMeetingRoom } from "./meeting-room/MeetingRoomTypes";

function App() {
  const [selectedMeetingRoom, setSelectedMeetingRoom] = useState<IMeetingRoom | undefined>();

  return (
    <div className="App">
      <div className={"meeting-room-styling"} >
        <MeetingRoomList onSelectedMeetingRoomChange={(e) => setSelectedMeetingRoom(e)} />
      </div>
      <div className={"meeting-room-styling"} >
        <MeetingRoomDetails selectedMeetingRoom={selectedMeetingRoom} />
      </div>
    </div>
  );
}

export default App;

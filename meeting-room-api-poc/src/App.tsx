import { useState } from "react";
import "./App.css";
import MeetingRoomDetailsPage from "./meeting-room-details/MeetingRoomDetails";
import { MeetingRoomListPage } from "./meeting-room/MeetingRoom";
import { IMeetingRoom } from "./meeting-room/MeetingRoomTypes";

function App() {
  const [selectedMeetingRoom, setSelectedMeetingRoom] = useState<IMeetingRoom | undefined>();
  
  return (
    <div className="App">
      <div className={"meeting-room-styling"} >
        <MeetingRoomListPage onSelectedMeetingRoomChange={(e) => setSelectedMeetingRoom(e)} />
      </div>
      <div className={"meeting-room-styling"} >
        <MeetingRoomDetailsPage selectedMeetingRoom={selectedMeetingRoom}/>
      </div>
    </div>
  );
}

export default App;

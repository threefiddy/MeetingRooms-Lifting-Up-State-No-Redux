import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMeetingRoom, MeetingRoomProps } from '../meeting-room/MeetingRoomTypes';

const MeetingRoomsPage: React.FC<MeetingRoomProps> = props => {

  const [meetingRooms, setMeetingRooms] = useState<IMeetingRoom[]>();

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8080/api/school/meetingRooms/getall";

      const res = await axios.get(url);

      setMeetingRooms(res.data);
    }
    
    fetchData();
  }, []);


  const onclick = (e: React.MouseEvent, selectedMeetingRoom: IMeetingRoom) => {
    e.preventDefault();
    props.onSelectedMeetingRoomChange(selectedMeetingRoom)
  }

  return (
    <>
      <h2>Meeting Rooms</h2>
      <table>
        <tbody>
          {meetingRooms &&
            meetingRooms.map(x => (
              <tr key={x.Id} onClick={((e) => onclick(e, x))} className={"meeting-rooms-table"}>
                <th>{x.Id}</th>
                <th>{x.Name}</th>
                <th>{x.Location}</th>
                <th>{x.RoomCapacity}</th>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )

}

export { MeetingRoomsPage as MeetingRoomListPage };
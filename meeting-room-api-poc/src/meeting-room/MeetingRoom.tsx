import React from "react";
import { IMeetingRoom, MeetingRoomProps, MeetingRoomState } from '../meeting-room/MeetingRoomTypes';

class MeetingRoomsPage extends React.Component<MeetingRoomProps, MeetingRoomState> {
  constructor(props: MeetingRoomProps) {
    super(props);
    this.state = {
      meetingRooms: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/school/meetingRooms/getall")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            meetingRooms: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(): JSX.Element {
    const onclick = (e: React.MouseEvent, selectedMeetingRoom: IMeetingRoom) => {
      e.preventDefault();
      this.props.onSelectedMeetingRoomChange(selectedMeetingRoom)
    }

    return (
      <>
        <h2>Meeting Rooms</h2>
        <table>
          <tbody>
            {this.state.meetingRooms &&
              this.state.meetingRooms.map(x => (
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
}

export { MeetingRoomsPage as MeetingRoomsPage };
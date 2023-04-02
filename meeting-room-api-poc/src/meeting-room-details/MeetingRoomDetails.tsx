import React from "react";
import { MeetingRoomDetailsProps } from "./MeetingRoomDetailsTypes";

class MeetingRoomDetailsPage extends React.Component<MeetingRoomDetailsProps> {
    render(): JSX.Element {
        return (
            <>
                <h2>Chosen one</h2>
                {this.props.selectedMeetingRoom && (
                    <>
                        <p>{this.props.selectedMeetingRoom.Name}</p>
                        <p>{this.props.selectedMeetingRoom.Location}</p>
                        <p>{this.props.selectedMeetingRoom.RoomCapacity}</p>
                    </>
                )}
            </>
        )
    }
}

export default MeetingRoomDetailsPage;
import React from "react";
import { MeetingRoomDetailsProps } from "./MeetingRoomDetailsTypes";

const meetingRoomDetailsPage: React.FC<MeetingRoomDetailsProps> = props => {
    return (
        <>
            <h2>Chosen one</h2>
            {props.selectedMeetingRoom && (
                <>
                    <p>{props.selectedMeetingRoom.Name}</p>
                    <p>{props.selectedMeetingRoom.Location}</p>
                    <p>{props.selectedMeetingRoom.RoomCapacity}</p>
                </>
            )}
        </>
    )
}

export default meetingRoomDetailsPage;
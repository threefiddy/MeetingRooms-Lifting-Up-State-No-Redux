export interface IMeetingRoom {
  Id?: number;
  Name?: string;
  Location?: string;
  RoomCapacity?: number;
}

export type MeetingRoomProps = {
  onSelectedMeetingRoomChange: (selectedMeetingRoom?: IMeetingRoom) => void;
}
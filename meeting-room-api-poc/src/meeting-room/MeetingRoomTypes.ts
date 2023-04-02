export interface IMeetingRoom {
  Id?: number;
  Name?: string;
  Location?: string;
  RoomCapacity?: number;
}

export type MeetingRoomProps = {
  onSelectedMeetingRoomChange: (selectedMeetingRoom?: IMeetingRoom) => void;
  meetingRooms?: IMeetingRoom[];
  
}

export type MeetingRoomState = {
  selectedMeetingRoom?: IMeetingRoom
  isLoaded?: boolean;
  meetingRooms?: IMeetingRoom[];
  error?: any
}

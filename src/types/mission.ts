export interface IMission {
  id: string;
  title: string;
  address: string;
  content: string;
  mission: string;
  number: string;
  score: number;
  // status: number; //Coming, Happening, Expired // can be saved as numbers (0, 1, 2) // no need because startDate and endDate determine time
  // statusText: string; //can create a convertText
  startDate: Date;
  endDate: Date;
  //accepted, pending, denied, done, cancelled
}

export interface IUserMission {
  id: string;
  missionId: string;
  userId: string;
  userStatus: string;
  submission?: string; //anh nop
}
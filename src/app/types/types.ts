export interface RoomType {
  id: number;

  roomType: string;

  cleaningType: string;
  stayCleaningType: string;
  isKeyBack: boolean;
  isCleaningComplete: boolean;

  nowBeds: number;
  newBeds: number;
  adult: number;
  inf: number;
  kidInf: number;

  memo: string;

  isWaitingCheck: boolean;
}

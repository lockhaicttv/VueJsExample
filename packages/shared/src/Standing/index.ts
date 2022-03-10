interface IGroupDetails {
  id: number;
  club: string;
  flag: string;
  MP: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
  Pts: number;
  lastFive: Array<number | string>;
}

interface IGroupDetailsMock {
  id: number;
  club: string;
  flag: string;
  stats: Array<number>;
  lastFive: Array<number | string>;
}
interface IStandingMock {
  groupName: string;
  groupDetail: Array<IGroupDetailsMock>;
}
interface IStanding {
  groupName: string;
  groupDetails: IGroupDetails[];
}
export { IGroupDetails, IStanding, IGroupDetailsMock, IStandingMock };

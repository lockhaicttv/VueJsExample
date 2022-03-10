import { INews } from "../News";
interface IPlayers {
  id: string;
  name: string;
  avatar: string;
  url: string;
  rank: number;
  goals: number;
  flag_country: string;
  country: string;
  position: string;
}
interface ITrending {
  playerID: string;
  name: string;
  country: string;
  position: string;
  avatar: string;
  url: string;
  newspaper: INews[];
}
interface IPlayerState {
  players: IPlayers[];
  trending: ITrending[];
}

interface IStatsState {
  stats: IPlayers[];
}
export { IPlayers, ITrending, IPlayerState, IStatsState };

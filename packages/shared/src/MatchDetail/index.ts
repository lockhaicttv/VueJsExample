//state trong store
interface IStateMatchDetail {
  matchDetails: IMatchDetailsHeading;
  matchStats: IMatchDetailStats;
}
//interface cho dữ liệu trả về từ mock
interface IMatchDetails {
  id: number;
  startDateTime: string;
  stage: string;
  homeTeam: IMatchDetailsTeam;
  awayTeam: IMatchDetailsTeam;
  stadium: string;
}
//interface cho heading - Chiến
interface IMatchDetailsHeading {
  id?: number;
  stage?: string;
  startDateTime?: string;
  homeTeam?: ITeamScore;
  awayTeam?: ITeamScore;
}
//interface cho heading - Thanh
interface IMatchDetailStats {
  id?: number;
  homeTeam?: IMatchTeamStats;
  awayTeam?: IMatchTeamStats;
  stadium?: string;
}
//Dùng cho homeTeam & awayTeam MatchHeading -Chiến
interface ITeamScore {
  name: string;
  logoUrl: string;
  score: number;
  penalty: number;
  goals: Array<IGoals>;
}

interface IGoals {
  scorer: string;
  minute: string;
  OG: boolean;
  penalty: boolean;
}
interface IRedCard {
  player: string;
  minute: string;
}
//Dùng cho Mock
interface IMatchDetailsTeam {
  id: number;
  name: string;
  logoUrl: string;
  shots: number;
  shotsTarget: number;
  possession: string;
  passes: number;
  passAccuracy: string;
  fouls: number;
  yellowCards: number;
  redCards: Array<IRedCard>;
  offsides: number;
  corners: number;
  score: number;
  penalty: number;
  goals: Array<IGoals>;
}
//Dùng cho homeTeam & awayTeam MatchStats -Thanh
interface IMatchTeamStats {
  name: string;
  logoUrl: string;
  shots: number;
  shotsTarget: number;
  possession: string;
  passes: number;
  passAccuracy: string;
  fouls: number;
  yellowCards: number;
  redCards: Array<IRedCard>;
  offsides: number;
  corners: number;
}

interface IMatchDetailsState {
  matchDetailStats: IMatchDetailStats;
  matchDetailsHeading: IMatchDetailsHeading;
}

export type {
  IStateMatchDetail,
  IMatchDetails,
  IMatchDetailsTeam,
  IMatchDetailStats,
  IMatchDetailsHeading,
  ITeamScore,
  IGoals,
  IRedCard,
  IMatchTeamStats,
  IMatchDetailsState,
};

interface IMatches {
  SEMI_FINAL?: Array<IMatch> | Array<never>;
  QUARTER_FINAL?: Array<IMatch> | Array<never>;
  FINAL?: Array<IMatch> | Array<never>;
  DATA?: Array<IMatch> | Array<never>;
}
interface IInfo {
  homeTeam: string | number;
  awayTeam: string | number;
}

interface ITeam {
  id?: number | undefined;
  name: string;
  logoUrl: string;
}
interface IMatch {
  id: number;
  statsId: number;
  startDateTime: string;
  status: string | null;
  stage: string;
  group: string | null;
  groupShort: string | null;
  homeTeam: ITeam;
  awayTeam: ITeam;
  score: IInfo;
  penalty?: IInfo;
  redcard?: IInfo;
  winner?: number;
}
interface IStateMatches {
  matches: IMatches;
}

export { IMatches, IInfo, ITeam, IMatch, IStateMatches };

import { IMatches, IMatch } from "@projectb/shared";

const handleData = (matches: Array<IMatch>): IMatches => {
  try {
    const data: IMatches = {
      QUARTER_FINAL: [],
      SEMI_FINAL: [],
      FINAL: [],
    };
    const QUARTER_FINAL: Array<IMatch> = [...matches].filter((item: IMatch) => item.stage === "QUARTER_FINAL");
    const SEMI_FINAL: Array<IMatch> = [...matches].filter((item: IMatch) => {
      return item.stage === "SEMI_FINAL";
    });
    const FINAL: Array<IMatch> = [...matches].filter((item: IMatch) => {
      return item.stage === "FINAL";
    });
    data.QUARTER_FINAL = QUARTER_FINAL;
    data.SEMI_FINAL = SEMI_FINAL;
    data.FINAL = FINAL;

    return data;
  } catch (error) {
    return error;
  }
};

const handleDatabyId = (matches: Array<IMatch>, id: string): IMatches => {
  try {
    const data: IMatches = {
      DATA: [],
    };
    const DATA: Array<IMatch> = [...matches].filter(
      (item: IMatch) => item.homeTeam.id === parseInt(id) || item.awayTeam.id === parseInt(id),
    );

    data.DATA = DATA;
    return data;
  } catch (error) {
    return error;
  }
};

export { handleData, handleDatabyId };

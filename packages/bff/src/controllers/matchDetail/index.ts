import { Request, Response } from "express";
import apiCaller from "@/ultis/apiCaller";
import { IMatchDetails, IMatchDetailStats, IMatchDetailsHeading } from "@projectb/shared";
import { AxiosResponse } from "axios";
import { logger } from "@/ultis/logger";

const getMatchDetails = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  await apiCaller("details", "get")
    .then((response: AxiosResponse) => {
      if (response.data) {
        const item: IMatchDetails = response.data.filter((element: IMatchDetails) => id === element.id)[0];
        logger.info(item, "Details results");
        const MatchDetailsHeading: IMatchDetailsHeading = {
          id: item.id,
          stage: item.stage,
          startDateTime: item.startDateTime,
          homeTeam: {
            name: item.homeTeam.name,
            logoUrl: item.homeTeam.logoUrl,
            score: item.homeTeam.score,
            penalty: item.homeTeam.penalty,
            goals: item.homeTeam.goals,
          },
          awayTeam: {
            name: item.awayTeam.name,
            logoUrl: item.awayTeam.logoUrl,
            score: item.awayTeam.score,
            penalty: item.awayTeam.penalty,
            goals: item.awayTeam.goals,
          },
        };

        const MatchDetailStats: IMatchDetailStats = {
          id: item.id,
          homeTeam: {
            name: item.homeTeam.name,
            logoUrl: item.homeTeam.logoUrl,
            shots: item.homeTeam.shots,
            shotsTarget: item.homeTeam.shotsTarget,
            possession: item.homeTeam.possession,
            passes: item.homeTeam.passes,
            passAccuracy: item.homeTeam.passAccuracy,
            fouls: item.homeTeam.fouls,
            yellowCards: item.homeTeam.yellowCards,
            redCards: item.homeTeam.redCards,
            offsides: item.homeTeam.offsides,
            corners: item.homeTeam.corners,
          },
          awayTeam: {
            name: item.awayTeam.name,
            logoUrl: item.awayTeam.logoUrl,
            shots: item.awayTeam.shots,
            shotsTarget: item.awayTeam.shotsTarget,
            possession: item.awayTeam.possession,
            passes: item.awayTeam.passes,
            passAccuracy: item.awayTeam.passAccuracy,
            fouls: item.awayTeam.fouls,
            yellowCards: item.awayTeam.yellowCards,
            redCards: item.awayTeam.redCards,
            offsides: item.awayTeam.offsides,
            corners: item.awayTeam.corners,
          },
          stadium: item.stadium,
        };
        res.status(200).json({ MatchDetailsHeading, MatchDetailStats });
      }
    })
    .catch((error: Error) => {
      logger.error(error, "Error when fetching match's details");
      res.status(500).json({ error });
    });
};
export default getMatchDetails;

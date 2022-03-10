import { Request, Response } from "express";
import apiCaller from "@/ultis/apiCaller";
import { IPlayers, ITrending } from "@projectb/shared";
import { AxiosResponse } from "axios";
import { logger } from "@/ultis/logger";

const getPlayers = async (req: Request, res: Response): Promise<void> => {
  await apiCaller("player", "GET")
    .then((response: AxiosResponse) => {
      if (response.data) {
        const results: IPlayers = response.data;
        res.status(200).json({ players: results });
      } else {
        res.status(200).json({ players: [] });
      }
    })
    .catch((error: Error) => {
      logger.error(error, "Error when fetching players");
      res.status(500).json({ error });
    });
};
const getTrending = async (req: Request, res: Response): Promise<void> => {
  await apiCaller("newspaper", "GET")
    .then((response: AxiosResponse) => {
      if (response.data) {
        const results: ITrending[] = response.data;
        res.status(200).json({ trending: results });
      } else {
        res.status(200).json({ trending: [] });
      }
    })
    .catch((error: Error) => {
      logger.error(error, "Error when fetching newspaper");
      res.status(500).json({ error });
    });
};

export { getPlayers, getTrending };

import { handleData, handleDatabyId } from "./repository";
import { Response, Request } from "express";
import apiCaller from "@/ultis/apiCaller";
import { AxiosResponse } from "axios";
import { logger } from "@/ultis/logger";

const getDataMatches = async (req: Request, res: Response): Promise<void> => {
  apiCaller("matches", "get")
    .then((response: AxiosResponse) => {
      if (response.data) {
        const result = handleData(response.data);
        res.status(200).json(result);
      } else {
        res.status(500).json({ data: [] });
      }
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error });
      logger.error(error, "Error when fetching data");
    });
};

const getDataMatchesbyId = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  apiCaller("matches", "get")
    .then((response: AxiosResponse) => {
      if (response.data) {
        const result = handleDatabyId(response.data, id);
        res.status(200).json(result);
      } else {
        res.status(500).json({ data: [] });
      }
    })
    .catch((error: Error) => {
      res.status(500).json({ error: error });
      logger.error(error, "Error when fetching data");
    });
};

export { getDataMatches, getDataMatchesbyId };

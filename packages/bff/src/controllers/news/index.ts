import { Request, Response } from "express";
import apiCaller from "@/ultis/apiCaller";
import { INews } from "@projectb/shared";
import { AxiosResponse } from "axios";

import { logger } from "@/ultis/logger";
const getNews = async (req: Request, res: Response): Promise<void> => {
  await apiCaller("news", "get")
    .then((response: AxiosResponse) => {
      if (response.data) {
        const results: INews = response.data;
        res.status(200).json({ news: results });
      } else {
        res.status(200).json({ news: [] });
      }
    })
    .catch((error: Error) => {
      logger.error(error, "Error when fetching news");
      res.status(500).json({ error: "This is the error" });
    });
};
export default getNews;

import callApi from "@/ultis/apiCaller";
import { IStanding, IGroupDetails, IStandingMock, IGroupDetailsMock } from "@projectb/shared";
import { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { logger } from "@/ultis/logger";

const get_all_data_standing = async (req: Request, res: Response): Promise<void> => {
  const data: IStanding[] = [];

  await callApi("standing", "get")
    .then((res: AxiosResponse) => {
      if (res?.data) {
        res.data.map((item: IStandingMock) => {
          const groupDetails: Array<IGroupDetails> = [];

          item.groupDetail.forEach((clubStatItem: IGroupDetailsMock) => {
            groupDetails.push({
              id: clubStatItem.id,
              club: clubStatItem.club,
              flag: clubStatItem.flag,
              MP: clubStatItem.stats[0],
              W: clubStatItem.stats[1],
              D: clubStatItem.stats[2],
              L: clubStatItem.stats[3],
              GF: clubStatItem.stats[4],
              GA: clubStatItem.stats[5],
              GD: clubStatItem.stats[6],
              Pts: clubStatItem.stats[7],
              lastFive: clubStatItem.lastFive,
            });
          });

          data.push({
            groupName: item.groupName,
            groupDetails: groupDetails,
          });
        });
      }
    })
    .catch((err: Error) => {
      logger.error(err, "Get standing data fail");
    });
  res.status(200).json(data);
};
export default get_all_data_standing;

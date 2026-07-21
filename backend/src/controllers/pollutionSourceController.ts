import { Request, Response } from 'express';
import { runPollutionAttributionAgent } from '../agents/pollutionAttributionAgent';

export const getPollutionSources = async (req: Request, res: Response) => {
  const cityName = (req.query.city as string) || 'Bhopal';
  const attributionData = await runPollutionAttributionAgent(cityName);
  return res.json(attributionData);
};

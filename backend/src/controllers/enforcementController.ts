import { Request, Response } from 'express';
import { runEnforcementAgent } from '../agents/enforcementAgent';

export const getEnforcementIntelligence = async (req: Request, res: Response) => {
  const cityName = (req.query.city as string) || 'Bhopal';
  const enforcementData = await runEnforcementAgent(cityName);
  return res.json(enforcementData);
};

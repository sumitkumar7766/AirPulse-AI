import { Request, Response } from 'express';
import { processCopilotQuery } from '../agents/copilotAgent';

export const handleCopilotQuery = async (req: Request, res: Response) => {
  try {
    const { prompt, cityName, currentAQI, contextData } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const result = await processCopilotQuery({
      prompt,
      cityName,
      currentAQI,
      contextData
    });

    return res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to process AI Copilot query' });
  }
};

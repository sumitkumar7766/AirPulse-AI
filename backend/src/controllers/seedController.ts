import { Request, Response } from 'express';
import { seedDatabase } from '../services/seedService';

export const seedDatabaseHandler = async (req: Request, res: Response) => {
  try {
    await seedDatabase();
    return res.json({ message: 'Database seeding execution complete.' });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to seed database' });
  }
};

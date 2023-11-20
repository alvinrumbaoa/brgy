// pages/api/teams.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createTeam } from '../../../controllers/teamControllers';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const result = await createTeam(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

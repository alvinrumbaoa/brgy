import type { NextApiRequest, NextApiResponse } from 'next';
import { addPlayer } from '../../../controllers/playerController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const result = await addPlayer(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
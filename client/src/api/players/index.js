import dbConnect from '../../../lib/dbConnect';
import Player from '../../../models/Player';

// Connect to the database
dbConnect();

// GET all players or POST a new player
export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const players = await Player.find({});
        res.status(200).json({ success: true, data: players });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const player = await Player.create(req.body);
        res.status(201).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false });
      break;
  }
}

import dbConnect from '../../../lib/dbConnect';
import Player from '../../../models/Player';

// Connect to the database
dbConnect();

// GET, PUT, DELETE a specific player
export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const player = await Player.findById(id);
        if (!player) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const player = await Player.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!player) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: player });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedPlayer = await Player.deleteOne({ _id: id });
        if (!deletedPlayer) {
          return res.status(404).json({ success: false });
        }
        res.status(204).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false });
      break;
  }
}

import { runCors } from '../../../middleware/cors';
import { errorHandler } from '../../../middleware/errorHandler';
import { validateRequest } from '../../../middleware/validateRequest';
import { teamSchema } from '../../../schemas/teamSchema';
import Team from '../../../models/Team';

// Your original handler logic, refactored to use middleware
const teamHandler = async (req, res) => {
  await runCors(req, res); // Apply the CORS middleware

  if (req.method === 'GET') {
    // Get all teams logic
    const teams = await Team.find({});
    return res.status(200).json(teams);
  }

  if (req.method === 'POST') {
    // Add new team logic
    const newTeam = new Team(req.body);
    const savedTeam = await newTeam.save();
    return res.status(201).json(savedTeam);
  }

  // If method is not supported
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
};

// Wrap the teamHandler with error handling
export default errorHandler(async (req, res) => {
  if (req.method === 'POST') {
    // Only apply request validation for POST requests
    return validateRequest(teamSchema)(req, res, () => teamHandler(req, res));
  }

  return teamHandler(req, res);
});
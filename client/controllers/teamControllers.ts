// controllers/teamController.ts
import { Team } from '../models/Team';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export const createTeam = async (team: Team) => {
  try {
    await client.connect();
    const db = client.db("basketballApp");
    const teams = db.collection("teams");
    const result = await teams.insertOne(team);
    return result;
  } finally {
    await client.close();
  }
};
// Other CRUD functions for teams
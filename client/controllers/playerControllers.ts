// controllers/playerController.ts
import { Player } from '../models/Players';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export const addPlayer = async (player: Player) => {
  try {
    await client.connect();
    const db = client.db("basketballApp");
    const players = db.collection("players");
    const result = await players.insertOne(player);
    return result;
  } finally {
    await client.close();
  }
};
// Other CRUD functions

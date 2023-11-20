// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/dbConnect';
import bcrypt from 'bcrypt';

type ResponseData = {
  message: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Invalid Input' });
    return;
  }

  const client = await connectToDatabase();

  try {
    const db = client.db();
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      res.status(422).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await db.collection('users').insertOne({ email, password: hashedPassword });

    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}

export default handler;

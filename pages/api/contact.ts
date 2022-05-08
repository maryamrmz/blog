import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

type Data = {
  name?: string;
  message?:
    | string
    | {
        email: string;
        name: string;
        message: string;
      };
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage: {
      id?: ObjectId;
      email: any;
      name: any;
      message: any;
    } = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.odwod.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed.' });
      return;
    }

    client.close();

    return res
      .status(201)
      .json({ name: 'Successfully stored message!', message: newMessage });
  }
};

export default handler;

'use server';

import mongoose from 'mongoose';
import { connectDB } from './db';

// Define the schema here to keep it simple
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export async function saveMessage(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await connectDB();
    await Message.create({ name, email, message });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
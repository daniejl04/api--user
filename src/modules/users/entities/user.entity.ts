import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })
  email: string;

  @Prop({ required: true })
  password: number;

  createdAt?: Date;
}

export const userSchema = SchemaFactory.createForClass(User);

userSchema.index(
  { userId: 1 },
  {
    name: 'index to improve userId search query',
  },
);

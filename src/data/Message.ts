import { User } from ".";

export interface Message {
  id: number;
  author: User;
  text?: string;
  imageUrl?: string;
  time: Date;
}

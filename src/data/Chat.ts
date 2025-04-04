import { Message, User } from ".";

export interface Chat {
  id: number;
  name: string;
  messages: Message[];
  lastMessage: Message;
  participantIds: User[];
  unreadCount: number;
}

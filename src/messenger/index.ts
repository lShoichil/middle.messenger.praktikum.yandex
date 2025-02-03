import Handlebars from "handlebars";
import "./style.pcss";
import { ChatList, ChatPlaceholder } from "./components";
import { Chat } from "data/Chat";

Handlebars.registerPartial("ChatList", ChatList);
Handlebars.registerPartial("ChatPlaceholder", ChatPlaceholder);

const template = `
  <div class="messenger">
    <div class="chat-list">
      {{{chatList}}}
    </div>
    <div class="chat-window">
      {{{chatContent}}}
    </div>
  </div>
`;

const chats: Chat[] = [
  {
    id: 1,
    name: "Андрей",
    lastMessage: "Изображение",
    time: "10:49",
    unread: 2,
  },
  {
    id: 2,
    name: "Владимир",
    lastMessage: "Ласт сообщение",
    time: "12 марта",
    unread: 1,
  },
  {
    id: 3,
    name: "Анатолий",
    lastMessage: "Изображение",
    time: "10:49",
    unread: 2,
  },
];

const context = {
  chatList: ChatList({ chats }),
  chatContent: ChatPlaceholder({}),
};

export const MessengerPage = () => {
  return Handlebars.compile(template)(context);
};

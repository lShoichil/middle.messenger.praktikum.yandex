import Handlebars from "handlebars";
import "./style.pcss";
import { ChatList, ChatPlaceholder } from "./components";
import { Chat } from "data/Chat";
import { ChatWindow } from "./components/chat-window/ChatWindow";

Handlebars.registerPartial("ChatList", ChatList);
Handlebars.registerPartial("ChatPlaceholder", ChatPlaceholder);
Handlebars.registerPartial("ChatWindow", ChatWindow);

const template = `
  <div class="messenger">
    <div class="left-content">
      {{{chatList}}}
    </div>
    <div class="right-content">
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

export const MessengerPage = () => {
  let selectedChat: Chat | null = null;

  const render = () => {
    const appElement = document.getElementById("page-content");
    if (!appElement) {
      console.error("Элемент #app не найден");
      return;
    }

    appElement.innerHTML = Handlebars.compile(template)({
      chatList: ChatList({ chats }),
      chatContent: selectedChat
        ? ChatWindow({ chat: selectedChat })
        : ChatPlaceholder({}),
    });

    attachEventListeners();
  };

  const attachEventListeners = () => {
    document.querySelectorAll(".chat-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        const chatId = Number((event.currentTarget as HTMLElement).dataset.id);
        if (chatId) {
          selectedChat = chats.find((chat) => chat.id === chatId)!;
          render();
        }
      });
    });
  };

  setTimeout(render, 0);

  return "";
};

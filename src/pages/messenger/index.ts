import Handlebars from "handlebars";
import "./style.pcss";
import { ChatList, ChatPlaceholder } from "./components";
import { Chat } from "data/Chat";
import { ChatWindow } from "./components/chat/chat-window/ChatWindow";

interface IProps {
  chats: Chat[];
}

export const MessengerPage = ({ chats: chatList }: IProps) => {
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

  let selectedChat: Chat | null = null;

  const render = () => {
    const appElement = document.getElementById("page-content");
    if (!appElement) {
      console.error("Элемент #app не найден");
      return;
    }

    appElement.innerHTML = Handlebars.compile(template)({
      chatList: ChatList({ chats: chatList }),
      chatContent: selectedChat
        ? ChatWindow({ chat: selectedChat, currentUserId: 0 })
        : ChatPlaceholder({}),
    });

    attachEventListeners();
  };

  const attachEventListeners = () => {
    document.querySelectorAll(".chat-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        const chatId = Number((event.currentTarget as HTMLElement).dataset.id);
        if (chatId) {
          selectedChat = chatList.find((chat) => chat.id === chatId)!;
          render();
        }
      });
    });
  };

  // todo: очень не уверен что это правильно так использовать
  setTimeout(render, 0);
  return "";
};

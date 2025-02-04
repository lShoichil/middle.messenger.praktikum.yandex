import Handlebars from "handlebars";
import "./ChatWindow.pcss";
import { Chat } from "data/Chat";

interface IProps {
  chat: Chat;
}

export const ChatWindow = (props: IProps) => {
  const chatWindowTemplate = `
      <div class="chat-window-content">
        <div class="chat-header">
          <h2>{{name}}</h2>
        </div>
        <div class="chat-messages">
          <p>Сообщения чата с {{name}}...</p>
        </div>
      </div>
    `;

  return Handlebars.compile(chatWindowTemplate)(props.chat);
};

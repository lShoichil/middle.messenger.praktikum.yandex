import Handlebars from "handlebars";
import "./ChatWindow.pcss";
import { Chat, Message } from "data";
import { ChatMessage, ChatHeader } from "../../";

interface IProps {
  chat: Chat;
  currentUserId: number;
}

export const ChatWindow = (props: IProps) => {
  Handlebars.registerPartial("ChatMessage", ChatMessage);
  Handlebars.registerPartial("ChatHeader", ChatHeader);

  const chatWindowTemplate = `
    <div class="chat-window">
      {{{chatHeader}}}
      <div class="chat-messages">
        {{#each messages}}
          {{{this}}}
        {{/each}}
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Сообщение" />
        <button class="send-button">➤</button>
      </div>
    </div>
  `;

  return Handlebars.compile(chatWindowTemplate)({
    chatHeader: ChatHeader({ name: props.chat.name }),
    messages: props.chat.messages.map((message: Message) =>
      ChatMessage({
        message,
        isCurrentUser: message.author.id === props.currentUserId,
      })
    ),
  });
};

import Handlebars from "handlebars";
import "./ChatWindow.pcss";
import { Chat, Message } from "data";
import { ChatHeader, ChatMessage, ChatInput } from "../../";

interface IProps {
  chat: Chat;
  currentUserId: number;
}

export const ChatWindow = (props: IProps) => {
  Handlebars.registerPartial("ChatHeader", ChatHeader);
  Handlebars.registerPartial("ChatMessage", ChatMessage);
  Handlebars.registerPartial("ChatInput", ChatInput);

  const chatWindowTemplate = `
    <div class="chat-window">
      {{{chatHeader}}}
      <div class="chat-messages-list">
        {{#each messages}}
          {{{this}}}
        {{/each}}
      </div>
      {{{chatInput}}}
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
    chatInput: ChatInput({})
  });
};

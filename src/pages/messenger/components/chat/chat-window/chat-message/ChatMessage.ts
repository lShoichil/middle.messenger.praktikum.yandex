import Handlebars from "handlebars";
import "./ChatMessage.pcss";
import { Message } from "data";

interface IProps {
  message: Message;
  isCurrentUser: boolean;
}

export const ChatMessage = (props: IProps) => {
  const chatMessageTemplate = `
    <div class="chat-message {{#if isCurrentUser}}chat-message--self{{/if}}">
      {{#if imageUrl}}
        <img src="{{imageUrl}}" alt="Изображение" class="chat-message__image"/>
      {{/if}}
      {{#if text}}
        <p class="chat-message__text">{{text}}</p>
      {{/if}}
      <span class="chat-message__time">{{formatDate time}}</span>
    </div>
  `;

  return Handlebars.compile(chatMessageTemplate)({
    ...props.message,
    formattedTime: `${props.message.time.getHours()}:${String(
      props.message.time.getMinutes()
    ).padStart(2, "0")}`,
    isCurrentUser: props.isCurrentUser,
  });
};

import Handlebars from "handlebars";
import "./ChatItem.pcss";

Handlebars.registerHelper("formatDate", (date: Date) => {
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
});

const chatItemTemplate = `
  <div class="chat-item" {{#if isActive}}active{{/if}}" data-id="{{id}}">
    <div class="chat-main-info">
      <div class="chat-avatar"></div>

      <div class="chat-content">
        <div class="chat-name">{{name}}</div>
        <div class="chat-last-message">{{lastMessage.text}}</div>
      </div>
    </div>

    <div class="chat-meta">
      <div class="chat-time">{{formatDate lastMessage.time}}</div>
      {{#if unreadCount}}
        <div class="chat-unread">{{unreadCount}}</div>
      {{/if}}
    </div>
  </div>
`;

export const ChatItem = Handlebars.compile(chatItemTemplate);

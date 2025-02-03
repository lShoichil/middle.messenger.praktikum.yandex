import Handlebars from "handlebars";
import "./ChatItem.pcss";

const chatItemTemplate = `
  <div class="chat-item">
    <div class="chat-avatar"></div>
    <div class="chat-content">
      <div class="chat-name">{{name}}</div>
      <div class="chat-last-message">{{lastMessage}}</div>
    </div>
    <div class="chat-meta">
      <div class="chat-time">{{time}}</div>
      {{#if unread}}
        <div class="chat-unread">{{unread}}</div>
      {{/if}}
    </div>
  </div>
`;

export const ChatItem = Handlebars.compile(chatItemTemplate);

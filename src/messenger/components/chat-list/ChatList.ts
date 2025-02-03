import Handlebars from "handlebars";
import "./ChatList.pcss";
import { ChatItem, SearchBar } from "..";
import { Chat } from "data/Chat";

export const ChatList = (props: { chats: Chat[] }) => {
  Handlebars.registerPartial("ChatItem", ChatItem);
  Handlebars.registerPartial("SearchBar", SearchBar);

  const chatListTemplate = `
    <div class="chat-list">
      {{{SearchBar}}}
      <div class="chat-list-items">
        {{#each chats}}
          {{> ChatItem}}
        {{/each}}
      </div>
    </div>
  `;

  return Handlebars.compile(chatListTemplate)(props);
};

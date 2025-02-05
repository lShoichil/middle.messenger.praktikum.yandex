import Handlebars from "handlebars";
import "./ChatList.pcss";
import { ChatItem, SearchBar, ProfileButton } from "..";
import { Chat } from "data/Chat";

interface IProps { chats: Chat[] }

export const ChatList = (props: IProps) => {
  const chatListTemplate = `
    <div class="chat-list">
      {{{ProfileButton}}}
      {{{SearchBar}}}
      <div class="chat-list-items">
        {{#each chats}}
          {{> ChatItem}}
        {{/each}}
      </div>
    </div>
  `;

  return Handlebars.compile(chatListTemplate)({
    ProfileButton: ProfileButton({}),
    SearchBar: SearchBar({}),
    ChatItem: (chat: Chat) => ChatItem(chat),
    chats: props.chats,
  });
};

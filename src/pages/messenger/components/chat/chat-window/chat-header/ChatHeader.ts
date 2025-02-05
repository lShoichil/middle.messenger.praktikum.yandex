import Handlebars from "handlebars";
import "./ChatHeader.pcss";

interface IProps {
  name: string;
}

export const ChatHeader = (props: IProps) => {
  const chatHeaderTemplate = `
    <header class="chat-header">
      <div class="chat-header__left">
        <div class="chat-header__avatar"></div>
        <span class="chat-header__name">{{name}}</span>
      </div>
      <div class="chat-header__options">
        <svg class="chat-header__icon" width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E" />
          <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E" />
          <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E" />
        </svg>
      </div>
      {{{modal}}}
    </header>
  `;

  return Handlebars.compile(chatHeaderTemplate)({
    name: props.name,
  });
}  

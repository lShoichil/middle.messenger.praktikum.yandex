import { Message, Chat, Props } from '../../../../../data';
import Block from '../../../../../core/Block';
import './ChatWindow.scss';
import ChatHeader from './chat-header/ChatHeader';
import ChatInput from './chat-input/ChatInput';
import ChatMessage from './chat-message/ChatMessage';

interface IProps extends Props {
  chat: Chat;
  currentUserId: number;
}

export default class ChatWindow extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      chatHeader: new ChatHeader({ name: props.chat.name }),
      messages: props.chat.messages.map(
        (message: Message) =>
          new ChatMessage({
            message,
            isCurrentUser: message.author.id === props.currentUserId
          })
      ),
      chatInput: new ChatInput({})
    });
  }

  render() {
    const template = `  
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

    return this.compile(template, this.props);
  }
}

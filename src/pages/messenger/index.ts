import { ChatList, ChatPlaceholder, ChatWindow } from './components';
import { Props, Chat } from '../../data';
import Block from '../../core/Block';
import './style.scss';

interface IProps extends Props {
  chats: Chat[];
}

export default class MessengerPage extends Block<IProps> {
  private selectedChat: Chat | null = null;

  constructor(props: IProps) {
    super({
      ...props,
      chatList: new ChatList({ chats: props.chats })
    });
  }

  render() {
    const template = `
      <div class="messenger">
        <div class="left-content">
          {{{chatList}}}
        </div>
        <div class="right-content">
          {{{chatContent}}}
        </div>
      </div>
    `;

    this.attachEventListeners();

    const chatContent = this.selectedChat
      ? new ChatWindow({ chat: this.selectedChat, currentUserId: 0 })
      : new ChatPlaceholder({});

    console.log('only props', { ...this.props });
    console.log('with chatContent', { ...this.props, chatContent });

    return this.compile(template, {
      ...this.props,
      chatContent
    });
  }

  private attachEventListeners() {
    const chatItems = this.getContent()?.querySelectorAll('.chat-item');
    chatItems?.forEach((item) => {
      item.addEventListener('click', (event) => {
        const chatId = Number((event.currentTarget as HTMLElement).dataset.id);
        if (chatId) {
          this.selectedChat = this.props.chats.find((chat) => chat.id === chatId) ?? null;
          this.props.chatContent = this.selectedChat
            ? new ChatWindow({ chat: this.selectedChat, currentUserId: 0 })
            : new ChatPlaceholder({});
          this.render();
        }
      });
    });
  }
}

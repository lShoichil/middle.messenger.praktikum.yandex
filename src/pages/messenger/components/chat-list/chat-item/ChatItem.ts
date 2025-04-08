import { Chat, Props } from '../../../../../data';
import Block from '../../../../../core/Block';
import './ChatItem.scss';

interface IProps extends Props, Chat {}

export default class ChatItem extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      text: props.lastMessage.text,
      formatDate: props.lastMessage.time.toLocaleString('ru-RU', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  }

  render() {
    const template = `  
    <div class="chat-item" {{#if isActive}}active{{/if}}" data-id="{{id}}">
      <div class="chat-main-info">
        <div class="chat-avatar"></div>

        <div class="chat-content">
          <div class="chat-name">{{name}}</div>
          <div class="chat-last-message">{{text}}</div>
        </div>
      </div>

      <div class="chat-meta">
        <div class="chat-time">{{formatDate}}</div>
        {{#if unreadCount}}
          <div class="chat-unread">{{unreadCount}}</div>
        {{/if}}
      </div>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

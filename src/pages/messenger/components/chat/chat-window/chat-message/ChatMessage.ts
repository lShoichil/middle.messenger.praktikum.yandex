import { Props, Message } from '../../../../../../data';
import Block from '../../../../../../core/Block';
import './ChatMessage.scss';

interface IProps extends Props {
  message: Message;
  isCurrentUser: boolean;
}

export default class ChatMessage extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props.message,
      formattedTime: `${props.message.time.getHours()}:${String(props.message.time.getMinutes()).padStart(2, '0')}`,
      isCurrentUser: props.isCurrentUser
    });
  }

  render() {
    const template = `  
    <div class="chat-message {{#if isCurrentUser}}chat-message-self{{/if}}">
      {{#if imageUrl}}
        <img src="{{imageUrl}}" alt="Изображение" class="chat-message-image"/>
      {{/if}}
      {{#if text}}
        <p class="chat-message-text">{{text}}</p>
      {{/if}}
      <span class="chat-message-time">{{formatDate time}}</span>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

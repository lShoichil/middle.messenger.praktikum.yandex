import { Props } from '../../../../../../data';
import Block from '../../../../../../core/Block';
import './ChatHeader.scss';

interface IProps extends Props {
  name: string;
}

export default class ChatHeader extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      name: props.name
    });
  }

  render() {
    const template = `  
    <header class="chat-header">
      <div class="chat-header-left">
        <div class="chat-header-avatar"></div>
        <span class="chat-header-name">{{name}}</span>
      </div>
      <div class="chat-header-options">
        <svg class="chat-header-icon" width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E" />
          <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E" />
          <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E" />
        </svg>
      </div>
      {{{modal}}}
    </header>
    `;

    return this.compile(template, this.props);
  }
}

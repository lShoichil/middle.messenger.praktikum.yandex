import { Props } from '../../../../../data';
import Block from '../../../../../core/Block';
import './ChatPlaceholder.scss';

export default class ChatPlaceholder extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <div class="chat-placeholder">
      Выберите чат, чтобы отправить сообщение
    </div>
    `;

    return this.compile(template, this.props);
  }
}

import { Props } from '../../data';
import Block from '../../core/Block';
import '../error-server/error.scss';

export default class ErrorNotFoundPage extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <div class="error-container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Не туда попали</p>
      <a href="/" class="error-link">Назад к чату</a>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

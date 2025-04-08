import { Props } from '../../data';
import Block from '../../core/Block';
import './error.scss';

export default class ErrorServerPage extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <div class="error-container">
      <h1 class="error-code">500</h1>
      <p class="error-message">Сервер лёг, а вы идите</p>
      <a href="/" class="error-link">Назад к чату</a>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

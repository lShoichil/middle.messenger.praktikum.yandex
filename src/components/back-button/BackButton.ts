import './BackButton.scss';
import { Props } from '../../data';
import Block from '../../core/Block';
export default class BackButton extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <button class="back-button">
        < Назад
    </button>
    `;

    return this.compile(template, this.props);
  }
}

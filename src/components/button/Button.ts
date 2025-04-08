import { Props } from '../../data';
import Block from '../../core/Block';
import './button.scss';

export default class Button extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <button id="{{id}}" class="button" type="{{type}}" {{#if disabled}} disabled {{/if}}>
      {{text}}
    </button>
    `;

    return this.compile(template, this.props);
  }
}

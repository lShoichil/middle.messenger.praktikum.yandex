import './Avatar.scss';
import Block from '../../core/Block';
import { Props } from '../../data';

export default class Avatar extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <div class="avatar">
      {{#if imageUrl}}
        <img src="{{imageUrl}}" alt="Avatar" class="avatar-image" />
      {{/if}}
      <div class="avatar-overlay">
        <label for="avatar-upload" class="avatar-label">Поменять аватар</label>
        <input type="file" id="avatar-upload" name="avatar" class="avatar-input" accept="image/*" />
      </div>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

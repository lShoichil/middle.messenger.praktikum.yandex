import { Props } from '../../../../../data';
import Block from '../../../../../core/Block';
import './ProfileButton.scss';

export default class ProfileButton extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <div class="profile-button">
      <a href="/profile">Профиль ></a>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

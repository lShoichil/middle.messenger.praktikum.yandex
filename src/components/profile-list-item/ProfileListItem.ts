import { Props } from '../../data';
import Block from '../../core/Block';
import './ProfileListItem.scss';
interface IProps extends Props {
  label: string;
  value: string;
}

export default class ProfileListItem extends Block<IProps> {
  constructor(props: IProps) {
    super({ ...props });
  }

  render() {
    const template = `  
      <div class="profile-list-item">
        <span class="profile-list-item-label">{{label}}</span>
        <span class="profile-list-item-value">{{value}}</span>
      </div>
    `;

    return this.compile(template, this.props);
  }
}

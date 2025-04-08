import Block from '../../core/Block';
import { Props, User } from '../../data';
import { Avatar, BackProfileBlock, FormTitle, Link, ProfileListItem } from './../../components';
import './UserProfile.scss';

interface IProps extends Props {
  user: User;
}

export default class UserProfilePage extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      backProfileBlock: new BackProfileBlock({}),
      avatar: new Avatar({ imageUrl: props.user.avatarUrl }),
      title: new FormTitle({ text: 'Профиль пользователя' }),
      loginInput: new ProfileListItem({ label: 'Логин', value: props.user.login }),
      firstNameInput: new ProfileListItem({ label: 'Имя', value: props.user.firstName }),
      lastNameInput: new ProfileListItem({ label: 'Фамилия', value: props.user.lastName }),
      phoneInput: new ProfileListItem({ label: 'Телефон', value: props.user.phone }),
      passwordInput: new ProfileListItem({ label: 'Пароль', value: props.user.password }),
      profileLink1: new Link({ text: 'Изменить пароль', href: '#edit-password' }),
      profileLink2: new Link({ text: 'Выйти', href: '#logout' })
    });
  }

  render() {
    const template = `  
      <div>
        {{{backProfileBlock}}}
        <div class="user-profile">
            {{{avatar}}}
            {{{title}}}
          <div class="profile-info-list">
            {{{loginInput}}}
            {{{firstNameInput}}}
            {{{lastNameInput}}}
            {{{phoneInput}}}
            {{{passwordInput}}}
          </div>
          <div class="profile-actions">
            {{{profileLink1}}}
            {{{profileLink2}}}
          </div>
        </div>
      </div>
    `;

    return this.compile(template, this.props);
  }
}

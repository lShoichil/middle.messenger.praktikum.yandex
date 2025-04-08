import { Props, User } from '../../data';
import { Avatar, BackProfileBlock, Button, FormTitle, Input } from '../../components';
import Block from '../../core/Block';
import '../profile-change-data/ProfileChangeData.scss';
interface IProps extends Props {
  user: User;
}

export default class ProfileChangePassword extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      backProfileBlock: new BackProfileBlock({}),
      avatar: new Avatar({ imageUrl: props.user.avatarUrl }),
      title: new FormTitle({ text: props.user.chatName }),
      oldPasswordInput: new Input({
        id: 'oldPasswordInput',
        name: 'password',
        label: 'Старый пароль',
        type: 'text',
        placeholder: 'Введите пароль',
        value: props.user.password
      }),
      newPasswordInput: new Input({
        id: 'newPasswordInput',
        name: 'password',
        label: 'Новый пароль',
        type: 'password',
        placeholder: 'Введите пароль'
      }),
      newPasswordRepeatInput: new Input({
        id: 'newPasswordRepeatInput',
        name: 'password',
        label: 'Повторите новый пароль',
        type: 'password',
        placeholder: 'Введите пароль'
      }),
      saveButton: new Button({
        text: 'Сохранить',
        type: 'button'
      })
    });
  }

  render() {
    const template = `  
    <div>
      {{{backProfileBlock}}}
      <div class="user-profile">
        {{{avatar}}}
        {{{title}}}
        <div class="user-profile-info">
          <form>
            {{{oldPasswordInput}}}
            {{{newPasswordInput}}}
            {{{newPasswordRepeatInput}}}
          </form>
        </div>
        <div class="user-profile-actions">
          {{{saveButton}}}
        </div>
      </div>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

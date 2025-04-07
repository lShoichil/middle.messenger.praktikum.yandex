import './ProfileChangeData.scss';
import { Props, User } from '../../data';
import { Avatar, BackProfileBlock, Button, FormTitle, Input } from '../../components';
import Block from '../../core/Block';

interface IProps extends Props {
  user: User;
}

export default class ProfileChangeData extends Block<IProps> {
  constructor(props: IProps) {
    super({
      ...props,
      backProfileBlock: new BackProfileBlock({}),
      avatar: new Avatar({ imageUrl: props.user.avatarUrl }),
      title: new FormTitle({ text: props.user.chatName }),
      emailInput: new Input({
        label: 'Почта',
        type: 'email',
        id: 'email',
        name: 'email',
        value: props.user.email
      }),
      loginInput: new Input({
        label: 'Логин',
        type: 'text',
        id: 'login',
        name: 'login',
        value: props.user.login
      }),
      firstNameInput: new Input({
        label: 'Имя',
        type: 'text',
        id: 'first_name',
        name: 'first_name',
        value: props.user.firstName
      }),
      lastNameInput: new Input({
        label: 'Фамилия',
        type: 'text',
        id: 'second_name',
        name: 'second_name',
        value: props.user.lastName
      }),
      chatNameInput: new Input({
        label: 'Имя в чате',
        type: 'text',
        id: 'chat_name',
        name: 'chat_name',
        value: props.user.chatName
      }),
      phoneInput: new Input({
        label: 'Телефон',
        type: 'tel',
        id: 'phone',
        name: 'phone',
        value: props.user.phone
      }),
      saveButton: new Button({
        text: 'Сохранить',
        type: 'button'
      }),
      onSave: (e: Event) => {
        e.preventDefault();

        const email = (this.refs.email as Block<Props> as Input).value();
        const login = (this.refs.login as Block<Props> as Input).value();
        const first_name = (this.refs.first_name as Block<Props> as Input).value();
        const second_name = (this.refs.second_name as Block<Props> as Input).value();
        const display_name = (this.refs.chat_name as Block<Props> as Input).value();
        const phone = (this.refs.phone as Block<Props> as Input).value();

        console.table({
          email,
          login,
          first_name,
          second_name,
          display_name,
          phone
        });
      }
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
            {{{emailInput}}}
            {{{loginInput}}}
            {{{firstNameInput}}}
            {{{lastNameInput}}}
            {{{chatNameInput}}}
            {{{phoneInput}}}
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

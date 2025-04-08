import { Props } from '../../data';
import Block from '../../core/Block';
import { Button, FormTitle, Input, Link } from './../../components';
import '../login/login.scss';

export default class SignUpPage extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      title: new FormTitle({ text: 'Регистрация' }),
      emailInput: new Input({
        label: 'Почта',
        type: 'email',
        name: 'email',
        id: 'email',
        placeholder: 'Введите почту',
        value: 'pochta@yandex.ru'
      }),
      loginInput: new Input({
        label: 'Логин',
        type: 'text',
        name: 'login',
        id: 'login',
        placeholder: 'Введите логин',
        value: 'ivanivanov'
      }),
      firstNameInput: new Input({
        label: 'Имя',
        type: 'text',
        name: 'first_name',
        id: 'first_name',
        placeholder: 'Введите имя',
        value: 'Иван'
      }),
      lastNameInput: new Input({
        label: 'Фамилия',
        type: 'text',
        name: 'second_name',
        id: 'second_name',
        placeholder: 'Введите фамилию',
        value: 'Иванов'
      }),
      phoneInput: new Input({
        label: 'Телефон',
        type: 'tel',
        name: 'phone',
        id: 'phone',
        placeholder: '+7 (999) 999-99-99',
        value: '+7 (909) 967 30 30'
      }),
      passwordInput: new Input({
        label: 'Пароль',
        type: 'password',
        name: 'password',
        id: 'password',
        placeholder: 'Введите пароль',
        value: '••••••••••••'
      }),
      passwordRepeatInput: new Input({
        label: 'Пароль (ещё раз)',
        type: 'password',
        name: 'password',
        id: 'password_repeat',
        placeholder: 'Введите пароль ещё раз',
        value: '••••••••••••'
      }),
      submitButton: new Button({
        text: 'Зарегистрироваться',
        type: 'submit'
      }),
      link: new Link({ text: 'Войти', href: '#login' })
    });
  }

  render() {
    const template = `  
    <div class="container">
      <div class="box">
        {{{title}}}
        <form>
          {{{emailInput}}}
          {{{loginInput}}}
          {{{firstNameInput}}}
          {{{lastNameInput}}}
          {{{phoneInput}}}
          {{{passwordInput}}}
          {{{passwordRepeatInput}}}
          {{{submitButton}}}
        </form>
        <p class="footer">
          {{{link}}}
        </p>
      </div>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

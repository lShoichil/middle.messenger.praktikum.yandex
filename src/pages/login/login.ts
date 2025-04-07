import './login.scss';
import { Props } from '../../data';
import Block from '../../core/Block';

import { Input, Button } from '../../components';

export default class LoginPage extends Block<Props> {
  constructor() {
    super({
      title: 'Вход',
      loginInput: new Input({
        label: 'Логин',
        type: 'text',
        id: 'login',
        name: 'login',
        placeholder: 'Введите логин'
      }),
      passwordInput: new Input({
        label: 'Пароль',
        type: 'password',
        id: 'password',
        name: 'password',
        placeholder: 'Введите пароль'
      }),
      submitButton: new Button({
        text: 'Авторизоваться',
        type: 'submit',
        events: {
          click: (e: Event) => this.handleSubmit(e)
        }
      }),
      link: '<a href="#sign-up" class="link">Нет аккаунта?</a>'
    });
  }

  private handleSubmit(e: Event) {
    e.preventDefault();

    const isLoginValid = (this.refs.login as Input).validate();
    const isPasswordValid = (this.refs.password as Input).validate();
    console.log('Validation results - login:', isLoginValid, 'password:', isPasswordValid);

    if (isLoginValid && isPasswordValid) {
      const login = (this.refs.login as Input).value();
      const password = (this.refs.password as Input).value();
      console.log('Form data:', { login, password });
    }
  }

  render(): DocumentFragment {
    const template = `
      <div class="container">
        <div class="box">
          <h1 class="form-title">{{title}}</h1>
          <form class="form">
            {{{loginInput}}}
            {{{passwordInput}}}
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

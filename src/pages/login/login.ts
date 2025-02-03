import Handlebars from "handlebars";
import { Button, Input } from "../../components";
import "./login.pcss";

Handlebars.registerPartial("Button", Button);
Handlebars.registerPartial("Input", Input);

const template = `
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Вход</h2>
      <form>
        {{{loginInput}}}
        {{{passwordInput}}}
        {{{submitButton}}}
      </form>
      <p class="login-footer">
        <a href="/register">Нет аккаунта?</a>
      </p>
    </div>
  </div>
`;

export const LoginPage = () => {
  return Handlebars.compile(template)({
    loginInput: Input({
      label: "Логин",
      type: "text",
      name: "login",
      placeholder: "Введите логин",
      error: "Текст ошибки",
    }),
    passwordInput: Input({
      label: "Пароль",
      type: "password",
      name: "password",
      placeholder: "Введите пароль",
      error: "Текст ошибки",
    }),
    submitButton: Button({
      text: "Авторизоваться",
      type: "submit",
    }),
  });
};

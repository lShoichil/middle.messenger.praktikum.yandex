import Handlebars from "handlebars";
import "./signup.pcss";
import { Input, Button } from "../../components";

Handlebars.registerPartial("Input", Input);
Handlebars.registerPartial("Button", Button);

const template = `
  <div class="signup-container">
    <div class="signup-box">
      <h2 class="signup-title">Регистрация</h2>
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
      <p class="signup-footer">
        <a href="/login">Войти</a>
      </p>
    </div>
  </div>
`;

export const SignUpPage = () => {
  return Handlebars.compile(template)({
    emailInput: Input({
      label: "Почта",
      type: "email",
      name: "email",
      placeholder: "Введите почту",
      value: "pochta@yandex.ru",
      error: "Текст ошибки",
    }),
    loginInput: Input({
      label: "Логин",
      type: "text",
      name: "login",
      placeholder: "Введите логин",
      value: "ivanivanov",
    }),
    firstNameInput: Input({
      label: "Имя",
      type: "text",
      name: "first_name",
      placeholder: "Введите имя",
      value: "Иван",
    }),
    lastNameInput: Input({
      label: "Фамилия",
      type: "text",
      name: "last_name",
      placeholder: "Введите фамилию",
      value: "Иванов",
    }),
    phoneInput: Input({
      label: "Телефон",
      type: "tel",
      name: "phone",
      placeholder: "+7 (999) 999-99-99",
      value: "+7 (909) 967 30 30",
    }),
    passwordInput: Input({
      label: "Пароль",
      type: "password",
      name: "password",
      placeholder: "Введите пароль",
      value: "••••••••••••",
    }),
    passwordRepeatInput: Input({
      label: "Пароль (ещё раз)",
      type: "password",
      name: "password_repeat",
      placeholder: "Введите пароль ещё раз",
      value: "••••••••••••",
    }),
    submitButton: Button({
      text: "Зарегистрироваться",
      type: "submit",
    }),
  });
};

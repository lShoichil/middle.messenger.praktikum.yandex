import Handlebars from "handlebars";
import { Input, Button } from "../../components";
import { MessengerPage } from "../../messenger";
import { Modal } from "../../messenger/components";
import { chats } from "../../mockData/mockData";
import {
  LoginPage,
  SignUpPage,
  ProfileChangeDataPage,
  ErrorNotFoundPage,
  ErrorServerPage,
  ProfileChangePasswordPage,
} from "../../pages";

import "./Menu.pcss";

export const menuItems: Record<string, () => string> = {
  login: () =>
    LoginPage({
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
    }),
  signUp: () =>
    SignUpPage({
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
    }),
  messenger: () => MessengerPage({ chats }),
  addUserModal: () =>
    Modal({
      loginInput: Input({
        label: "Логин",
        type: "text",
        name: "login",
        value: "UserName",
        placeholder: "Введите логин",
        error: "Текст ошибки",
      }),
      submitButton: Button({
        text: "Добавить",
        type: "submit",
      }),
    }),
  profileChangeData: () =>
    ProfileChangeDataPage({
      user: {
        id: 0,
        chatName: "aboba",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s",
        login: "ivanivanov",
        password: "password",
        email: "pochta@yandex.ru",
        phone: "+7 (909) 967 30 30",
        firstName: "Иван",
        lastName: "Иванов",
      },
    }),
  profileChangePassword: () =>
    ProfileChangePasswordPage({
      user: {
        id: 0,
        chatName: "aboba",
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4e0xMkOMp_Icz6fEVp3Euhu_r2s7fbogtA&s",
        login: "ivanivanov",
        password: "password",
        email: "pochta@yandex.ru",
        phone: "+7 (909) 967 30 30",
        firstName: "Иван",
        lastName: "Иванов",
      },
    }),
  error404: () => ErrorNotFoundPage({}),
  error500: () => ErrorServerPage({}),
};

export const defaultMenuItemsKey = "profileChangeData";

interface IProps {}

export const Menu = (props: IProps) => {
  const menuTemplate = `<nav class="menu">
    <a href="#" data-page="login" class="menu-link">Вход</a>
    <a href="#" data-page="signUp" class="menu-link">Регистрация</a>
    <a href="#" data-page="messenger" class="menu-link">Мессенджер</a>
    <a href="#" data-page="addUserModal" class="menu-link">Добавить в чат</a>
    <a href="#" data-page="profileChangeData" class="menu-link">Редактирование профиля</a>
    <a href="#" data-page="profileChangePassword" class="menu-link">Редактирование пароля</a>
    <a href="#" data-page="error404" class="menu-link">404</a>
    <a href="#" data-page="error500" class="menu-link">500</a>
  </nav>`;

  return Handlebars.compile(menuTemplate)(props);
};

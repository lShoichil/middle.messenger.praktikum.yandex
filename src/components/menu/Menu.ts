import { chats } from "../../mockData/mockData";
import Handlebars from "handlebars";
import { Input, Button } from "../../components";
import {
  LoginPage,
  SignUpPage,
  ProfileChangeDataPage,
  ErrorNotFoundPage,
  ErrorServerPage,
  ProfileChangePasswordPage,
  UserProfilePage,
  ModalsView,
} from "../../pages";

import "./Menu.pcss";
import { User } from "data";
import { MessengerPage } from "../../pages/messenger";

const me: User = {
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
};

export const menuItems: Record<string, () => string> = {
  login: () =>
    LoginPage({
      loginInput: Input({
        label: "Логин",
        type: "text",
        id: "login",
        name: "login",
        placeholder: "Введите логин",
        error: "Текст ошибки",
      }),
      passwordInput: Input({
        label: "Пароль",
        type: "password",
        id: "password",
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
        id: "email",
        placeholder: "Введите почту",
        value: "pochta@yandex.ru",
        error: "Текст ошибки",
      }),
      loginInput: Input({
        label: "Логин",
        type: "text",
        name: "login",
        id: "login",
        placeholder: "Введите логин",
        value: "ivanivanov",
      }),
      firstNameInput: Input({
        label: "Имя",
        type: "text",
        name: "first_name",
        id: "first_name",
        placeholder: "Введите имя",
        value: "Иван",
      }),
      lastNameInput: Input({
        label: "Фамилия",
        type: "text",
        name: "second_name",
        id: "second_name",
        placeholder: "Введите фамилию",
        value: "Иванов",
      }),
      phoneInput: Input({
        label: "Телефон",
        type: "tel",
        name: "phone",
        id: "phone",
        placeholder: "+7 (999) 999-99-99",
        value: "+7 (909) 967 30 30",
      }),
      passwordInput: Input({
        label: "Пароль",
        type: "password",
        name: "password",
        id: "password",
        placeholder: "Введите пароль",
        value: "••••••••••••",
      }),
      passwordRepeatInput: Input({
        label: "Пароль (ещё раз)",
        type: "password",
        name: "password",
        id: "password_repeat",
        placeholder: "Введите пароль ещё раз",
        value: "••••••••••••",
      }),
      submitButton: Button({
        text: "Зарегистрироваться",
        type: "submit",
      }),
    }),
  messenger: () => MessengerPage({ chats }),
  modalsView: ModalsView,
  profilePage: () => UserProfilePage({ user: me }),
  profileChangeData: () => ProfileChangeDataPage({ user: me }),
  profileChangePassword: () => ProfileChangePasswordPage({ user: me }),
  error404: () => ErrorNotFoundPage({}),
  error500: () => ErrorServerPage({}),
};

export const defaultMenuItemsKey = "login";

const menuTemplate = `<nav class="menu">
<a href="#" data-page="login" class="menu-link">Вход</a>
<a href="#" data-page="signUp" class="menu-link">Регистрация</a>
<a href="#" data-page="messenger" class="menu-link">Мессенджер</a>
<a href="#" data-page="profilePage" class="menu-link">Профиль</a>
<a href="#" data-page="profileChangeData" class="menu-link">Редактирование профиля</a>
<a href="#" data-page="profileChangePassword" class="menu-link">Редактирование пароля</a>
<a href="#" data-page="modalsView" class="menu-link">Модалки</a>
<a href="#" data-page="error404" class="menu-link">404</a>
<a href="#" data-page="error500" class="menu-link">500</a>
</nav>`;

export const Menu = Handlebars.compile(menuTemplate);

import Handlebars from 'handlebars';
import { Props } from '../../data';
import './Menu.scss';

import Block from '../../core/Block';
import {
  ErrorNotFoundPage,
  ErrorServerPage,
  LoginPage,
  ModalsView,
  ProfileChangeData,
  ProfileChangePassword,
  SignUpPage,
  UserProfilePage,
  MessengerPage
} from '../../pages';
import { chats, me } from '../../mockData/mockData';

export const menuItems: Record<string, () => Block<Props>> = {
  login: () => new LoginPage(),
  signUp: () => new SignUpPage({}),
  messenger: () => new MessengerPage({ chats: chats }),
  modalsView: () => new ModalsView({}),
  profilePage: () => new UserProfilePage({ user: me }),
  profileChangeData: () => new ProfileChangeData({ user: me }),
  profileChangePassword: () => new ProfileChangePassword({ user: me }),
  error404: () => new ErrorNotFoundPage({}),
  error500: () => new ErrorServerPage({})
};

export const defaultMenuItemsKey = 'login';

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

import Handlebars from "handlebars";
import "./Menu.pcss";

const menuTemplate = `<nav class="menu">
    <a href="#" data-page="login" class="menu-link">Вход</a>
    <a href="#" data-page="signup" class="menu-link">Регистрация</a>
    <a href="#" data-page="messenger" class="menu-link">Мессенджер</a>
    <a href="#" data-page="error404" class="menu-link">404</a>
    <a href="#" data-page="error500" class="menu-link">500</a>
</nav>`;

export const Menu = (props = {}) => Handlebars.compile(menuTemplate)(props);

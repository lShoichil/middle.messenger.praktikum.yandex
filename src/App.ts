import Handlebars from "handlebars";
import {
  Avatar,
  BackButton,
  BackProfileBlock,
  Button,
  FormTitle,
  Input,
  Link,
  Menu,
} from "./components";
import {
  ChatHeader,
  ChatInput,
  ChatItem,
  ChatList,
  ChatMessage,
  ChatPlaceholder,
  ChatWindow,
  Modal,
  ProfileButton,
  SearchBar,
} from "./messenger/components";
import { defaultMenuItemsKey, menuItems } from "./components/menu/Menu";

Handlebars.registerPartial("Input", Input);
Handlebars.registerPartial("Link", Link);
Handlebars.registerPartial("Button", Button);
Handlebars.registerPartial("Modal", Modal);
Handlebars.registerPartial("Avatar", Avatar);
Handlebars.registerPartial("FormTitle", FormTitle);
Handlebars.registerPartial("BackButton", BackButton);
Handlebars.registerPartial("BackProfileBlock", BackProfileBlock);

Handlebars.registerPartial("SearchBar", SearchBar);
Handlebars.registerPartial("ProfileButton", ProfileButton);
Handlebars.registerPartial("ChatItem", ChatItem);
Handlebars.registerPartial("ChatList", ChatList);
Handlebars.registerPartial("ChatWindow", ChatWindow);
Handlebars.registerPartial("ChatPlaceholder", ChatPlaceholder);
Handlebars.registerPartial("ChatHeader", ChatHeader);
Handlebars.registerPartial("ChatMessage", ChatMessage);
Handlebars.registerPartial("ChatInput", ChatInput);

export default class App {
  state = {
    currentPage: defaultMenuItemsKey,
  };

  constructor() {
    this.render();
  }

  render() {
    const Component = menuItems[this.state.currentPage];
    const appElement = document.getElementById("app");
    if (!appElement) return console.error("Элемент #app не найден");

    appElement.innerHTML = `
      <div id="page-header">
        ${Menu({})}
      </div>
      <div id="page-content">
        ${Component()}
      </div>
    `;

    this.attachEventListeners();
  }

  attachEventListeners() {
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = (e.target as HTMLElement).dataset.page;
        page && this.changePage(page);
      });
    });
  }

  changePage(page: string) {
    if (menuItems[page]) {
      this.state.currentPage = page;
      this.render();
    } else {
      console.error(`Страница ${page} не найдена`);
    }
  }
}

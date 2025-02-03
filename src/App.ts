import {
  ErrorNotFoundPage,
  ErrorServerPage,
  LoginPage,
  SignUpPage,
} from "./pages";
import { Menu } from "./components";
import { MessengerPage } from "./messenger";

const routes: Record<string, () => string> = {
  login: LoginPage,
  signup: SignUpPage,
  messenger: MessengerPage,
  error404: ErrorNotFoundPage,
  error500: ErrorServerPage,
};

export default class App {
  state = {
    currentPage: "login",
  };

  constructor() {
    this.render();
  }

  render() {
    const Component = routes[this.state.currentPage];
    const appElement = document.getElementById("app");
    if (!appElement) return console.error("Элемент #app не найден");

    appElement.innerHTML = `${Menu()}<div id="page-content">${Component()}</div>`;
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
    if (routes[page]) {
      this.state.currentPage = page;
      this.render();
    } else {
      console.error(`Страница ${page} не найдена`);
    }
  }
}

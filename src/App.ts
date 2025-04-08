import { defaultMenuItemsKey, menuItems } from './components/menu/Menu';
import { Menu } from './components';

export default class App {
  state = {
    currentPage: defaultMenuItemsKey
  };

  constructor() {
    this.render();
  }

  render() {
    const PageComponent = menuItems[this.state.currentPage]?.();

    const appElement = document.getElementById('app');
    if (!appElement) return console.error('Элемент #app не найден');

    appElement.innerHTML = '';

    const header = document.createElement('header');
    header.id = 'page-header';
    header.innerHTML = Menu({});
    appElement.appendChild(header);

    const section = document.createElement('section');
    section.id = 'page-content';

    if (PageComponent.getContent()) {
      section.appendChild(PageComponent.getContent());
    } else {
      section.innerHTML = '<p>Страница не найдена</p>';
    }

    appElement.appendChild(section);

    this.attachEventListeners();
  }

  attachEventListeners() {
    document.querySelectorAll('.menu-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = (e.target as HTMLElement).dataset.page;
        if (page) this.changePage(page);
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

import Handlebars from "handlebars";
import "./SearchBar.pcss";

const searchBarTemplate = `<div class="search-bar">
  <input type="text" class="search-input" placeholder="Поиск" />
</div>`;

export const SearchBar = Handlebars.compile(searchBarTemplate);

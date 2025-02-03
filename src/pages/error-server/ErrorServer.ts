import Handlebars from "handlebars";
import "./error.pcss";

const template = `
<div class="error-container">
  <h1 class="error-code">500</h1>
  <p class="error-message">Сервер лёг, а вы идите</p>
  <a href="/" class="error-link">Назад к чату</a>
</div>`;

export const ErrorServerPage = () => {
  return Handlebars.compile(template)({});
};

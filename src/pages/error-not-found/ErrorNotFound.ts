import Handlebars from "handlebars";
import "../error-server/error.pcss";

const template = `
<div class="error-container">
  <h1 class="error-code">404</h1>
  <p class="error-message">Не туда попали</p>
  <a href="/" class="error-link">Назад к чату</a>
</div>`;

export const ErrorNotFoundPage = () => {
  return Handlebars.compile(template)({});
};

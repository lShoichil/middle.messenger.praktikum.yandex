import Handlebars from "handlebars";
import "./error.pcss";

interface IProps {}

export const ErrorServerPage = (props: IProps) => {
  const template = `
    <div class="error-container">
      <h1 class="error-code">500</h1>
      <p class="error-message">Сервер лёг, а вы идите</p>
      <a href="/" class="error-link">Назад к чату</a>
    </div>
  `;

  return Handlebars.compile(template)(props);
};

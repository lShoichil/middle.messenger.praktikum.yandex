import Handlebars from "handlebars";
import "./BackButton.pcss";

const backButtonTemplate = `
 <button class="back-button">
    < Назад
  </button>
`;

export const BackButton = Handlebars.compile(backButtonTemplate);

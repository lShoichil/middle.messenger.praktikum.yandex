import Handlebars from "handlebars";
import "./button.pcss";

const buttonTemplate = `
  <button id="{{id}}" class="button" type="{{type}}" {{#if disabled}} disabled {{/if}}>
    {{text}}
  </button>
`;

export const Button = Handlebars.compile(buttonTemplate);

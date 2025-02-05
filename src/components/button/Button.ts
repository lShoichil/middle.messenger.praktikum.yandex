import Handlebars from "handlebars";
import "./Button.pcss";

const buttonTemplate = `
  <button id="{{id}}" class="button" {{#if disabled}} disabled {{/if}}>
    {{text}}
  </button>
`;

export const Button = Handlebars.compile(buttonTemplate);

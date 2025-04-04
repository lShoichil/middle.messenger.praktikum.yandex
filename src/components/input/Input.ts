import Handlebars from "handlebars";
import "./Input.pcss";

const inputTemplate = `<div class="input-container">
  <label for="{{name}}" class="input-label">{{label}}</label>
  <input
    id="{{id}}"
    type="{{type}}"
    name="{{name}}"
    placeholder="{{placeholder}}"
    value="{{value}}"
    class="input-field"
  />
  {{#if error}}
    <p class="input-error">{{error}}</p>
  {{/if}}
</div>`;

export const Input = Handlebars.compile(inputTemplate);

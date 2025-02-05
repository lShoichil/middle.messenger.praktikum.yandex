import Handlebars from "handlebars";
import "./Modal.pcss";

interface IProps {
  title: string;
  submitButton: string;
  fileName?: string;
  loginInput?: string;
  link?: string;
  errorMessage?: string;
}

export const Modal = (props: IProps) => {
  const modalTemplate = `
    <div class="modal__content">
      <div class="modal__title">{{{title}}}</div>
      <form>
        {{#if loginInput}}
          {{{loginInput}}}
        {{/if}}

        {{#if fileName}}
          <p class="modal__file-name">{{fileName}}</p>
        {{/if}}

        {{#if link}}
          <div class="modal__file-link">
            {{{link}}}
          </div>
        {{/if}}
          
        {{{submitButton}}}
        {{#if errorMessage}}
          <p class="modal__error">{{errorMessage}}</p>
        {{/if}}  
      </form>
      </div>
  `;

  return Handlebars.compile(modalTemplate)(props);
};

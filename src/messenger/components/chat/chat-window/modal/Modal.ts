import Handlebars from "handlebars";
import "./Modal.pcss";

interface IProps {
  loginInput: string;
  submitButton: string;
}

export const Modal = (props: IProps) => {
  const modalTemplate = `
  <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__content">
      <h3>Добавить пользователя</h3>
      {{{loginInput}}}
      {{{submitButton}}}
    </div>
  </div>
  `;

  return Handlebars.compile(modalTemplate)({...props});
};

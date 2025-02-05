import Handlebars from "handlebars";
import "./Modal.pcss";

interface IProps {
  loginInput: string;
  submitButton: string;
}

export const Modal = (props: IProps) => {
  const modalTemplate = `
  <div class="modal">
    <div class="modal__content">
      <h2 class="title">Добавить пользователя</h2>
      <form>
        {{{loginInput}}}
        {{{submitButton}}}
      </form>
    </div>
  </div>
  `;

  return Handlebars.compile(modalTemplate)({ ...props });
};

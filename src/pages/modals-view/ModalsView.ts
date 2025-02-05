import Handlebars from "handlebars";
import "./ModalsView.pcss";
import { Modal, FormTitle, Link, Input, Button } from "../../components";

export const ModalsView = () => {
  const modalsViewTemplate = `
    <div class="modal-list">
      {{{firstModal}}}
      {{{secondModal}}}
      {{{thirdModal}}}
      {{{fourthModal}}}
    </div>
  `;

  return Handlebars.compile(modalsViewTemplate)({
    firstModal: Modal({
      title: FormTitle({ text: "Добавить пользователя" }),
      loginInput: Input({
        label: "Логин",
        type: "text",
        name: "login",
        id: "login",
        value: "UserName",
        placeholder: "Введите логин",
        error: "Текст ошибки",
      }),
      submitButton: Button({
        text: "Добавить",
        type: "submit",
      }),
    }),
    secondModal: Modal({
      title: FormTitle({ text: "Файл загружен" }),
      fileName: "pic.jpg",
      submitButton: Button({
        text: "Поменять",
        type: "submit",
      }),
    }),
    thirdModal: Modal({
      title: FormTitle({ text: "Загрузите файл" }),
      link: Link({ text: "Выбрать файл на копьютере", href: "#selectFile" }),
      submitButton: Button({
        text: "Поменять",
        type: "submit",
      }),
      errorMessage: "Нужно выбрать файл",
    }),
    fourthModal: Modal({
      title: FormTitle({ text: "Ошибка, попробуйте ещё раз", isError: true }),
      link: Link({ text: "Выбрать файл на копьютере", href: "#selectFile" }),
      submitButton: Button({
        text: "Поменять",
        type: "submit",
      }),
    }),
  });
};

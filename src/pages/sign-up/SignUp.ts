import Handlebars from "handlebars";
import "../login/login.pcss";
import { FormTitle, Link } from "./../../components";

interface IProps {
  emailInput: string;
  loginInput: string;
  firstNameInput: string;
  lastNameInput: string;
  phoneInput: string;
  passwordInput: string;
  passwordRepeatInput: string;
  submitButton: string;
}

export const SignUpPage = (props: IProps) => {
  const template = `
    <div class="container">
      <div class="box">
        {{{title}}}
        <form>
          {{{emailInput}}}
          {{{loginInput}}}
          {{{firstNameInput}}}
          {{{lastNameInput}}}
          {{{phoneInput}}}
          {{{passwordInput}}}
          {{{passwordRepeatInput}}}
          {{{submitButton}}}
        </form>
        <p class="footer">
          {{{link}}}
        </p>
      </div>
    </div>
  `;

  return Handlebars.compile(template)({
    ...props,
    title: FormTitle({ text: "Регистрация" }),
    link: Link({ text: "Войти", href: "#login" }),
  });
};

import Handlebars from "handlebars";
import "./signup.pcss";
import { FormTitle } from "./../../components";

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
    <div class="signup-container">
      <div class="signup-box">
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
        <p class="signup-footer">
          <a href="/login">Войти</a>
        </p>
      </div>
    </div>
  `;

  return Handlebars.compile(template)({
    ...props,
    title: FormTitle({ text: "Регистрация" }),
  });
};

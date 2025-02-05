import Handlebars from "handlebars";
import "./login.pcss";
import { FormTitle } from "./../../components";

interface IProps {
  loginInput: string;
  passwordInput: string;
  submitButton: string;
}

export const LoginPage = (props: IProps) => {
  const template = `
  <div class="login-container">
    <div class="login-box">
      {{{title}}}
      <form>
        {{{loginInput}}}
        {{{passwordInput}}}
        {{{submitButton}}}
      </form>
      <p class="login-footer">
        <a href="/register">Нет аккаунта?</a>
      </p>
    </div>
  </div>
`;

  return Handlebars.compile(template)({
    ...props,
    title: FormTitle({ text: "Вход" }),
  });
};

import Handlebars from "handlebars";
import "./login.pcss";
import { FormTitle, Link } from "./../../components";

interface IProps {
  loginInput: string;
  passwordInput: string;
  submitButton: string;
}

export const LoginPage = (props: IProps) => {
  const template = `
  <div class="container">
    <div class="box">
      {{{title}}}
      <form>
        {{{loginInput}}}
        {{{passwordInput}}}
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
    title: FormTitle({ text: "Вход" }),
    link: Link({ text: "Нет акканта?", href: "#sign-up" }),
  });
};

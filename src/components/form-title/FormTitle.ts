import Handlebars from "handlebars";
import "./FormTitle.pcss";

interface IProps {
  text: string;
  isError?: boolean;
  className?: string;
}

export const FormTitle = (props: IProps) => {
  const formTitleTemplate = `<h2 class="title {{className}} {{#if isError}}error{{/if}}">{{text}}</h2>`;

  return Handlebars.compile(formTitleTemplate)(props);
};

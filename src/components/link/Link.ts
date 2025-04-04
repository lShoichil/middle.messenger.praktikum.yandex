import Handlebars from "handlebars";
import "./Link.pcss";

interface IProps {
  text: string;
  href: string;
  className?: string;
}

const linkTemplate = `
  <a href="{{href}}" class="link {{className}}">{{text}}</a>
`;

export const Link = (props: IProps) => Handlebars.compile(linkTemplate)(props);

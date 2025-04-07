import { Props } from '../../data';
import Block from '../../core/Block';
import './FormTitle.scss';

interface IProps extends Props {
  text: string;
  isError?: boolean;
  className?: string;
}

export default class FormTitle extends Block<IProps> {
  constructor(props: IProps) {
    super({ ...props });
  }

  render() {
    const template = `<h2 class="title {{className}} {{#if isError}}error{{/if}}">{{text}}</h2>`;

    return this.compile(template, this.props);
  }
}

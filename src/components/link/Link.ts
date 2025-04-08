import { Props } from '../../data';
import Block from '../../core/Block';
import './Link.scss';

interface IProps extends Props {
  text: string;
  href: string;
  className?: string;
}

export default class Link extends Block<IProps> {
  constructor(props: IProps) {
    super({ ...props });
  }

  render() {
    const template = `  <a href="{{href}}" class="link {{className}}">{{text}}</a>`;
    return this.compile(template, this.props);
  }
}

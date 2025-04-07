import { Props } from '../../../../../data';
import Block from '../../../../../core/Block';
import './SearchBar.scss';

export default class SearchBar extends Block<Props> {
  constructor(props: Props) {
    super({ ...props });
  }

  render() {
    const template = `  
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="Поиск" />
    </div>
    `;

    return this.compile(template, this.props);
  }
}

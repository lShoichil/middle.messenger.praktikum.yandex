import { ChatItem, SearchBar, ProfileButton } from '..';
import { Props, Chat } from '../../../../data';
import Block from '../../../../core/Block';
import './ChatList.scss';

interface IProps extends Props {
  chats: Chat[];
}

export default class ChatList extends Block<IProps> {
  constructor(props: IProps) {
    const chatItems = props.chats.map((chat) => new ChatItem({ ...chat }));

    super({
      ...props,
      profileButton: new ProfileButton({}),
      searchBar: new SearchBar({}),
      chatItems
    });
  }

  render() {
    const template = `
    <div class="chat-list">
      {{{profileButton}}}
      {{{searchBar}}}
      <div class="chat-list-items">
        {{#each chatItems}}
          {{{this}}}
        {{/each}}
      </div>
    </div>
    `;

    return this.compile(template, this.props);
  }
}

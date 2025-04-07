import { Props } from '../../data';
import Block from '../../core/Block';
import './BackProfileBlock.scss';
import { BackButton } from './../../components';

export default class BackProfileBlock extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      backButton: new BackButton({})
    });
  }

  render() {
    const template = `  
      <div class="back-profile-block">
        {{{backButton}}}
      </div>
    `;

    return this.compile(template, this.props);
  }
}

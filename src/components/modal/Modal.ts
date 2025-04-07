import { Props } from '../../data';
import Block from '../../core/Block';
import './Modal.scss';

interface IProps extends Props {
  title: Block<Props>;
  submitButton: Block<Props>;
  fileName?: string;
  loginInput?: Block<Props>;
  link?: Block<Props>;
  errorMessage?: string;
}

export default class Modal extends Block<IProps> {
  constructor(props: IProps) {
    super({ ...props });
  }

  render() {
    const template = `  
      <div class="modal-content">
        <div class="modal-title">{{{title}}}</div>
        <form>
          {{#if loginInput}}
            {{{loginInput}}}
          {{/if}}

          {{#if fileName}}
            <p class="modal-file-name">{{fileName}}</p>
          {{/if}}

          {{#if link}}
            <div class="modal-file-link">
              {{{link}}}
            </div>
          {{/if}}
            
          {{{submitButton}}}
          {{#if errorMessage}}
            <p class="modal-error">{{errorMessage}}</p>
          {{/if}}  
        </form>
        </div>
    `;

    return this.compile(template, this.props);
  }
}

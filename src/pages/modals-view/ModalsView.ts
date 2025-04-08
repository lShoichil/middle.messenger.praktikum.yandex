import { Props } from '../../data';
import Block from '../../core/Block';
import { Button, FormTitle, Input, Link, Modal } from './../../components';

import './ModalsView.scss';

export default class ModalsView extends Block<Props> {
  constructor(props: Props) {
    super({
      ...props,
      firstModal: new Modal({
        title: new FormTitle({ text: 'Добавить пользователя' }),
        loginInput: new Input({
          label: 'Логин',
          type: 'text',
          name: 'login',
          id: 'login',
          value: 'UserName',
          placeholder: 'Введите логин',
          error: 'Текст ошибки'
        }),
        submitButton: new Button({
          text: 'Добавить',
          type: 'submit'
        })
      }),
      secondModal: new Modal({
        title: new FormTitle({ text: 'Файл загружен' }),
        fileName: 'pic.jpg',
        submitButton: new Button({
          text: 'Поменять',
          type: 'submit'
        })
      }),
      thirdModal: new Modal({
        title: new FormTitle({ text: 'Загрузите файл' }),
        link: new Link({ text: 'Выбрать файл на копьютере', href: '#selectFile' }),
        submitButton: new Button({
          text: 'Поменять',
          type: 'submit'
        }),
        errorMessage: 'Нужно выбрать файл'
      }),
      fourthModal: new Modal({
        title: new FormTitle({ text: 'Ошибка, попробуйте ещё раз', isError: true }),
        link: new Link({ text: 'Выбрать файл на копьютере', href: '#selectFile' }),
        submitButton: new Button({
          text: 'Поменять',
          type: 'submit'
        })
      })
    });
  }

  render() {
    const template = `  
    <div class="modal-list">
      {{{firstModal}}}
      {{{secondModal}}}
      {{{thirdModal}}}
      {{{fourthModal}}}
    </div>
    `;

    return this.compile(template, this.props);
  }
}

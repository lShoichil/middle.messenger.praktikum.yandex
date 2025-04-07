import './Input.scss';
import { Props } from '../../data';
import Block from '../../core/Block';
import { VALIDATION_RULES, VALIDATION_ERRORS } from '../../utils/validations';

interface InputProps extends Props {
  id: string;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  style?: string;
  value?: string;
}

export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: () => this.validate()
      }
    });
  }

  render() {
    const template = `<div class="input-container">
      <label for="{{name}}" class="input-label">{{label}}</label>
      <input
        id="{{id}}"
        type="{{type}}"
        name="{{name}}"
        value="{{value}}"
        placeholder="{{placeholder}}"
        class="input-field"
        ref="input"
      />
      {{#if error}}
        <p class="input-error">{{error}}</p>
      {{/if}}
    </div>`;

    return this.compile(template, this.props);
  }

  private _value() {
    const htmlInputElement = this.refs.input.element as HTMLInputElement;
    return htmlInputElement.value;
  }

  public value() {
    this.validate();
    return this._value();
  }

  private _validate() {
    console.log('Validate...');
    const inputElement = this.refs.input.element as HTMLInputElement;

    return VALIDATION_RULES[inputElement.name].test(inputElement.value);
  }

  public validate(): boolean {
    const isValid = this._validate();

    if (isValid) {
      this.setProps({
        ...this.props,
        error: null,
        value: this._value()
      });
      return true;
    }
    const inputElement = this.refs.input.element as HTMLInputElement;
    this.setProps({
      ...this.props,
      error: VALIDATION_ERRORS[inputElement.name],
      value: this._value()
    });
    return false;
  }
}

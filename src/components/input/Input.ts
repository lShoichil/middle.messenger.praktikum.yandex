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
        blur: () => {
          this.validate();
        }
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
        event-listener
      />
      {{#if error}}
        <p class="input-error">{{error}}</p>
      {{/if}}
    </div>`;

    return this.compile(template, this.props);
  }

  private _value() {
    const input: HTMLInputElement = this.getContent('input') as HTMLInputElement;

    return input.value;
  }

  public value() {
    return this._value();
  }

  private _validate() {
    const inputValue = this.value();

    return VALIDATION_RULES[this.props.name].test(inputValue);
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

    this.setProps({
      ...this.props,
      error: VALIDATION_ERRORS[this.props.name],
      value: this._value()
    });

    return false;
  }
}

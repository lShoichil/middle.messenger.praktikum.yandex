import Handlebars from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import EventBus from './EventBus';

export default class Block<Props extends Record<string, unknown>> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const;

  private _element!: HTMLElement;

  public eventBus: () => EventBus;

  public props: Props;

  public children: Record<string, Block<Props>>;

  public refs: Record<string, Block<Props>> = {};

  public id: string | null = null;

  constructor(propsAndChildren = {}) {
    const eventBus = new EventBus();

    this.id = uuidv4();

    const { props, children } = this._getPropsAndChildren(propsAndChildren);

    const propsWithId = { ...props, __id: this.id };

    this.children = children;
    this.props = this._makePropsProxy(propsWithId);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _getPropsAndChildren(propsAndChildren: Record<string, unknown>) {
    const children: Record<string, Block<Props>> = {};
    const props: Record<string, unknown> = {};
    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props: props as Props, children };
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount(): void {
    this.componentDidMount();
  }

  componentDidMount() {
    /* TODO document why this method 'componentDidMount' is empty */
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._removeEvents();
    this._render();
  }

  componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>) {
    return !!(oldProps && newProps);
  }

  setProps = (nextProps: Record<string, unknown>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render().firstElementChild as HTMLElement;

    const isBlockWasRendered = !!this._element;

    if (isBlockWasRendered) {
      this._element?.replaceWith(block);
    }

    this._element = block;
    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: string, props: Record<string, unknown>): DocumentFragment {
    const propsAndStubs: Record<string, unknown> = { ...props, __refs: this.refs };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    const html = Handlebars.compile(template)(propsAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;

    Object.values(this.children).forEach((child) => {
      const stub = temp.content.querySelector(`[data-id="${child.id}"]`);
      const content = child.getContent();
      if (stub && content) {
        stub.replaceWith(content);
        child.dispatchComponentDidMount();
      }
    });

    return temp.content;
  }

  getContent() {
    return this._element;
  }

  private _addEvents() {
    const { events = {} } = this.props as Record<string, () => void>;

    Object.entries(events).forEach(([event, listener]) => {
      const eventListener = listener as EventListener;
      this._element?.addEventListener(event, eventListener);
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props as Record<string, () => void>;

    Object.entries(events).forEach(([event, listener]) => {
      const eventListener = listener as EventListener;
      this._element?.removeEventListener(event, eventListener);
    });
  }

  _makePropsProxy(props: Props): Props {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };
        const newTarget = { ...target, [prop]: value };

        target[prop as keyof Props] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, newTarget);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      }
    });
  }

  show() {
    const content = this.getContent();

    if (content) content.style.display = 'block';
  }

  hide() {
    const content = this.getContent();

    if (content) content.style.display = 'none';
  }
}

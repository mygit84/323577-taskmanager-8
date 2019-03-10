import {getTaskTemplate} from '../src/get-template';
import {createElement} from '../src/utils';


export default class Task {
  constructor(data) {
    this._title = data.title;
    this._dueDate = data.dueDate;
    this._tags = data.tags;
    this._picture = data.picture;
    this._color = data.color;
    this._repeatingDays = data.repeatingDays;

    this._state = {
      isDone: data.isDone,
      isFavorite: data.isFavorite
    };

    this._element = null;
    this._onEdit = null;
  }

  __onEditButtonClick() {
    return typeof this._onEdit === `function` && this._onEdit();
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return getTaskTemplate(this._color, this._state.isFavorite, this._state.isDone, this._repeatingDays, this._title, this._dueDate, this._tags, this._picture);
  }

  bind() {
    this._element.querySelector(`.card__btn--edit`)
      .addEventListener(`click`, this.__onEditButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.card__btn--edit`)
      .removeEventListener(`click`, this.__onEditButtonClick);
  }

  render() {
    this._element = createElement(this.template);
    this.bind();

    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}

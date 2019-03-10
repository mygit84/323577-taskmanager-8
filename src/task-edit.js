import {getEditTaskTemplate} from '../src/get-template';
import {createElement} from '../src/utils';


export default class TaskEdit {
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
    this._onSubmit = null;
  }

  __onSubmitButtonClick(evt) {
    evt.preventDefault();

    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return getEditTaskTemplate(this._color, this._state.isFavorite, this._state.isDone, this._repeatingDays, this._title, this._dueDate, this._tags, this._picture);
  }

  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`click`, this.__onSubmitButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`click`, this.__onSubmitButtonClick);
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

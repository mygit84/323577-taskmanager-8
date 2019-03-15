import {getEditTaskTemplate} from '../templates/task-templates';
import {Component} from './component';


export default class TaskEdit extends Component {
  constructor(data) {
    super();
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

    this._onSubmit = null;
  }

  __onSubmitButtonClick(evt) {
    evt.preventDefault();

    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  get template() {
    return getEditTaskTemplate(this._color, this._state.isFavorite, this._state.isDone, this._repeatingDays, this._title, this._dueDate, this._tags, this._picture);
  }

  bind() {
    this._element.querySelector(`.card__form`)
      .addEventListener(`submit`, this.__onSubmitButtonClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.card__form`)
      .removeEventListener(`submit`, this.__onSubmitButtonClick);
  }
}

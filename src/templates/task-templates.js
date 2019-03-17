import {COLORS} from '../data';


const moment = require(`moment`);
const CONTROLS = [`edit`, `archive`, `favorites`];

const getButtonControl = (value, isFavorite, isDone) => {
  return `<button
    type="button"
    class="card__btn card__btn--${value}
    ${(!isFavorite && value === `favorites`) ? `card__btn--disabled` : ``}
    ${isDone ? `card__btn--archive` : ``}">
      ${value}
  </button>`;
};

const getButtonsControls = (isFavorite, isDone) => {
  return CONTROLS
    .map((item) =>
      getButtonControl(item, isFavorite, isDone))
    .join(``);
};

const getColorBar = () => {
  return `<svg class="card__color-bar-wave" width="100%" height="10">
      <use xlink:href="#wave"></use>
    </svg>`;
};

const getTextArea = (title) => {
  return `<label>
    <textarea
      class="card__text"
      placeholder="Start typing your text here..."
      name="text">${title}
    </textarea>
  </label>`;
};

const getDateDeadlineButton = (isDate) => {
  return `<button class="card__date-deadline-toggle disabled" type="button">
    date: <span class="card__date-status">${isDate ? `yes` : `no`}</span>
  </button>`;
};

const getDate = (dueDate) => {
  return `${moment(dueDate, `DD.MM.YYYY hh:mm`).format(`D MMMM`)}`;
};

const getTime = (dueDate) => {
  return `${moment(dueDate, `DD.MM.YYYY h:mm`).format(`h:mm A`)}`;
};

const getDateDeadlineFieldset = (dueDate) => {
  return `<label class="card__input-deadline-wrap">
    <input
      class="card__date"
      type="text"
      placeholder="${getDate(dueDate)}"
      name="date"
      value = "${getDate(dueDate)}"
    />
  </label>
  <label class="card__input-deadline-wrap">
    <input
      class="card__time"
      type="text"
      placeholder="${getTime(dueDate)}"
      name="time"
      value = "${getTime(dueDate)}"
    />
  </label>`;
};

const getIsRepeatedTask = (repeatingDays) => {
  return Object.values(repeatingDays).some((it) => it === true);
};

const getRepeatToggleButton = (isRepeated) => {
  return `<button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">${isRepeated ? `yes` : `no`}</span>
  </button>`;
};

const getRepeatingDaysControls = (repeatingDays, index) => {
  return Object.keys(repeatingDays).map((element) =>
    `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${element}-${index}"
      name="repeat"
      value="${element}"
      ${repeatingDays[element] ? `checked` : ``}
    />
    <label class="card__repeat-day" for="repeat-${element}-${index}">
      ${element}
    </label>`)
  .join(``);
};

const getHashtags = (tags) => {
  return [...tags].map((element) =>
    `<span class="card__hashtag-inner">
        <input
          type="hidden"
          name="hashtag"
          value="${element}"
          class="card__hashtag-hidden-input"/>
        <button type="button" class="card__hashtag-name">
          #${element}
        </button>
        <button type="button" class="card__hashtag-delete">
          delete
        </button>
      </span>`).join(``);
};

const getHashtagsInput = () => {
  return `<label>
    <input
      type="text"
      class="card__hashtag-input"
      name="hashtag-input"
      placeholder="Type new hashtag here"
    />
  </label>`;
};

const getTaskImage = (picture) => {
  return `<label class="card__img-wrap">
    <input
      class="card__img-input visually-hidden"
      name="img"
    />
    <img
      src="${picture}"
      alt="task picture"
      class="card__img"
    />
  </label>`;
};

const getColorsInput = (color, index) => {
  return COLORS.map((item) =>
    `<input
      type="radio"
      id="color-${item}-${index}"
      class="card__color-input card__color-input--${item} visually-hidden"
      name="color"
      value="${item}"
      ${(item === color) ? `checked` : ``}
    />
    <label for="color-${item}-${index}" class="card__color card__color--${item}">
      ${item}
    </label>`).join(``);
};

const getTaskStatusButton = () => {
  return `<div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>`;
};

const getTaskTemplate = (color, isFavorite, isDone, repeatingDays, title, dueDate, tags, picture) => {
  return `<article class="card card--${color} ${getIsRepeatedTask(repeatingDays) ? ` card--repeat` : ``}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          ${getButtonsControls(isFavorite, isDone)}
        </div>

        <div class="card__color-bar">
          ${getColorBar()}
        </div>

        <div class="card__textarea-wrap">
          ${getTextArea(title)}
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">

              <fieldset class="card__date-deadline">
                ${getDateDeadlineFieldset(dueDate)}
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${getHashtags(tags)}
              </div>
            </div>
          </div>

          ${getTaskImage(picture)}
        </div>
    </form>
  </article>`;
};

const getEditTaskTemplate = (color, isFavorite, isDone, isDate, isRepeated, repeatingDays, title, dueDate, tags, picture, index) => {
  return `<article class="card card--edit card--${color} ${getIsRepeatedTask(repeatingDays) ? ` card--repeat` : ``}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          ${getButtonsControls(isFavorite, isDone)}
        </div>

        <div class="card__color-bar">
          ${getColorBar()}
        </div>

        <div class="card__textarea-wrap">
          ${getTextArea(title)}
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
            ${getDateDeadlineButton(isDate)}

              <fieldset class="card__date-deadline" ${!isDate && `disabled`}>
                ${getDateDeadlineFieldset(dueDate)}
              </fieldset>

              ${getRepeatToggleButton(isRepeated)}

              <fieldset class="card__repeat-days" ${!isRepeated && `disabled`}>
                <div class="card__repeat-days-inner">
                  ${getRepeatingDaysControls(repeatingDays, index)}
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${getHashtags(tags)}
              </div>
              ${getHashtagsInput()}
            </div>
          </div>

          ${getTaskImage(picture)}

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              ${getColorsInput(color, index)}
            </div>
          </div>
        </div>
        ${getTaskStatusButton()}
      </div>
    </form>
  </article>`;
};


export {getTaskTemplate, getEditTaskTemplate};

import {COLORS} from '../src/data';

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

const getDateDeadlineButton = () => {
  return `<button class="card__date-deadline-toggle disabled" type="button">
      date: <span class="card__date-status">no</span>
    </button>`;
};

const getDateDeadlineFieldset = (dueDate) => {
  return `<label class="card__input-deadline-wrap">
    <input
      class="card__date"
      type="text"
      placeholder="23 September"
      name="date"
      value="${dueDate}"
    />
  </label>
  <label class="card__input-deadline-wrap">
    <input
      class="card__time"
      type="text"
      placeholder="11:15 PM"
      name="time"
    />
  </label>`;
};

const getRepeatToggleButton = () => {
  return `<button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">no</span>
  </button>`;
};

const getRepeatingClass = (repeatingDays) => {
  const isRepeatingTask = Object.values(repeatingDays).some((item) => item);
  const repeatingClass = isRepeatingTask ? ` card--repeat` : ``;

  return repeatingClass;
};

const getRepeatingDaysControls = (repeatingDays) => {
  return Object.keys(repeatingDays).map((element) =>
    `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${element}"
      name="repeat"
      value="${element}"/>
    <label class="card__repeat-day" for="repeat-${element}">
      ${element}
    </label>`).join(``);
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

const getColorsInput = (color) => {
  return COLORS.map((item) =>
    `<input
      type="radio"
      id="color-${item}"
      class="card__color-input card__color-input--${item} visually-hidden"
      name="color"
      value="${item}"
      ${(item === color) ? `checked` : ``}
    />
    <label for="color-${item}" class="card__color card__color--${item}">
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
  return `<article class="card card--${color} ${getRepeatingClass(repeatingDays)}">
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

const getEditTaskTemplate = (color, isFavorite, isDone, repeatingDays, title, dueDate, tags, picture) => {
  return `<article class="card card--edit card--${color} ${getRepeatingClass(repeatingDays)}">
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
            ${getDateDeadlineButton()}

              <fieldset class="card__date-deadline">
                ${getDateDeadlineFieldset(dueDate)}
              </fieldset>

              ${getRepeatToggleButton()}

              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  ${getRepeatingDaysControls(repeatingDays)}
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
              ${getColorsInput(color)}
            </div>
          </div>
        </div>
        ${getTaskStatusButton()}
      </div>
    </form>
  </article>`;
};


export {getTaskTemplate, getEditTaskTemplate};

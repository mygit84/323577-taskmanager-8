'use strict';

const FILTERS_CONTAINER = document.querySelector(`.main__filter`);
const TASKS_CONTAINER = document.querySelector(`.board__tasks`);
const FILTERS = [
  {
    title: `ALL`,
    number: 15,
    isChecked: true
  },
  {
    title: `OVERDUE`,
    number: 0,
    isDisabled: true
  },
  {
    title: `TODAY`,
    number: 0,
    isDisabled: true
  },
  {
    title: `FAVORITES`,
    number: 7
  },
  {
    title: `REPEATING`,
    number: 2
  },
  {
    title: `TAGS`,
    number: 6
  },
  {
    title: `ARCHIVE`,
    number: 115
  }
];
const CARDS = [
  {
    color: `card--black`,
    text: `This is example of new task, you can add picture, set date and time, add tags.`
  },
  {
    color: `card--pink card--repeat`,
    text: `It is example of repeating task. It marks by wave.`,
    isHashtag: true
  },
  {
    color: `card--yellow card--repeat`,
    text: `This is card with missing deadline`,
    isHashtag: true
  },
  {
    color: `card--yellow card--deadline`,
    text: `Here is a card with filled data`,
    isHashtag: true,
    isDate: true,
    isImage: true
  },
  {
    color: `card--blue`,
    text: ``,
    isHashtag: true
  },
  {
    color: `card--blue`,
    text: ``,
    isHashtag: true,
    isDate: true,
    isImage: true
  },
  {
    color: `card--black card--repeat`,
    text: `It is example of repeating task. It marks by wave.`,
    isHashtag: true
  }
];

const getFilter = (title, number, isChecked = false, isDisabled = false) => {
  return `<input
    type="radio"
    id="filter__${title}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? ` checked` : ``}
    ${isDisabled ? ` disabled` : ``}
  />
  <label for="filter__${title}" class="filter__label">
    ${title} <span class="filter__all-count">${number}</span>
  </label>`;
};

const getCard = (color, text, isHashtag = false, isDate = false, isImage = false) => {
  return `<article class="card ${color}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn card__btn--archive">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites card__btn--disabled">
            favorites
          </button>
        </div>

        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        <div class="card__textarea-wrap">
          <label>
            <textarea
              class="card__text"
              placeholder="Start typing your text here..."
              name="text">${text}
            </textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>

              <fieldset class="card__date-deadline"
              ${!isDate ? `disabled` : ``}>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                  />
                </label>
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__time"
                    type="text"
                    placeholder="11:15 PM"
                    name="time"
                  />
                </label>
              </fieldset>

              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">no</span>
              </button>

              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-mo-1"
                    name="repeat"
                    value="mo"
                  />
                  <label class="card__repeat-day" for="repeat-mo-1">
                    mo
                  </label>
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-tu-1"
                    name="repeat"
                    value="tu"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-tu-1">
                    tu
                  </label>
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-we-1"
                    name="repeat"
                    value="we"
                  />
                  <label class="card__repeat-day" for="repeat-we-1">
                    we
                  </label>
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-th-1"
                    name="repeat"
                    value="th"
                  />
                  <label class="card__repeat-day" for="repeat-th-1">
                    th
                  </label>
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-fr-1"
                    name="repeat"
                    value="fr"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-fr-1">
                    fr
                  </label>
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    name="repeat"
                    value="sa"
                    id="repeat-sa-1"
                  />
                  <label class="card__repeat-day" for="repeat-sa-1">
                    sa
                  </label>
                  <input
                    class="visually-hidden card__repeat-day-input"
                    type="checkbox"
                    id="repeat-su-1"
                    name="repeat"
                    value="su"
                    checked
                  />
                  <label class="card__repeat-day" for="repeat-su-1">
                    su
                  </label>
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${isHashtag ? `  <span class="card__hashtag-inner">
                    <input
                      type="hidden"
                      name="hashtag"
                      value="repeat"
                      class="card__hashtag-hidden-input"
                    />
                    <button type="button" class="card__hashtag-name">
                      #repeat
                    </button>
                    <button type="button" class="card__hashtag-delete">
                      delete
                    </button>
                  </span>

                  <span class="card__hashtag-inner">
                    <input
                      type="hidden"
                      name="hashtag"
                      value="repeat"
                      class="card__hashtag-hidden-input"
                    />
                    <button type="button" class="card__hashtag-name">
                      #cinema
                    </button>
                    <button type="button" class="card__hashtag-delete">
                      delete
                    </button>
                  </span>

                  <span class="card__hashtag-inner">
                    <input
                      type="hidden"
                      name="hashtag"
                      value="repeat"
                      class="card__hashtag-hidden-input"
                    />
                    <button type="button" class="card__hashtag-name">
                      #entertaiment
                    </button>
                    <button type="button" class="card__hashtag-delete">
                      delete
                    </button>
                  </span>` : ``}
              </div>

              <label>
                <input
                  type="text"
                  class="card__hashtag-input"
                  name="hashtag-input"
                  placeholder="Type new hashtag here"
                />
              </label>
            </div>
          </div>

          <label class="card__img-wrap ${!isImage ? `card__img-wrap--empty` : ``}">
            <input
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${!isImage ? `img/add-photo.svg` : `img/sample-img.jpg`}"
              alt="task picture"
              class="card__img"
            />
          </label>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-black-1"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
                checked
              />
              <label for="color-black-1" class="card__color card__color--black">
                black
              </label>
              <input
                type="radio"
                id="color-yellow-1"
                class="card__color-input card__color-input--yellow visually-hidden"
                name="color"
                value="yellow"
              />
              <label for="color-yellow-1" class="card__color card__color--yellow">
                yellow
              </label>
              <input
                type="radio"
                id="color-blue-1"
                class="card__color-input card__color-input--blue visually-hidden"
                name="color"
                value="blue"
              />
              <label for="color-blue-1" class="card__color card__color--blue">
                blue
              </label>
              <input
                type="radio"
                id="color-green-1"
                class="card__color-input card__color-input--green visually-hidden"
                name="color"
                value="green"
              />
              <label for="color-green-1" class="card__color card__color--green">
                green
              </label>
              <input
                type="radio"
                id="color-pink-1"
                class="card__color-input card__color-input--pink visually-hidden"
                name="color"
                value="pink"
              />
              <label for="color-pink-1" class="card__color card__color--pink">
                pink
              </label>
            </div>
          </div>
        </div>

        <div class="card__status-btns">
          <button class="card__save" type="submit">save</button>
          <button class="card__delete" type="button">delete</button>
        </div>
      </div>
    </form>
  </article>`;
};

const getCleanContainer = (container) => {
  container.innerHTML = ``;
};

const renderElement = (container, element) => {
  container.insertAdjacentHTML(`beforeEnd`, element);
};

const drawFilters = (arr) => {
  arr.forEach((item) => {
    renderElement(FILTERS_CONTAINER, getFilter(item.title, item.number, item.isChecked, item.isDisabled));
  });
};

const drawCards = (arr) => {
  arr.forEach((item) => {
    renderElement(TASKS_CONTAINER, getCard(item.color, item.text, item.isHashtag, item.isDate, item.isImage));
  });
};

const setElements = () => {
  drawFilters(FILTERS);
  drawCards(CARDS);
};

const getIntervalNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getNewArray = (arr) => {
  const randomNum = getIntervalNum(1, arr.length + 1);

  return arr.slice(0, randomNum);
};

const getFilterBtnClickHandler = (element, i) => {
  element[i].addEventListener(`click`, () => {
    getCleanContainer(TASKS_CONTAINER);
    drawCards(getNewArray(CARDS));
  });
};

const getArrayFiltersBtn = () => {
  const arrayFilters = document.querySelectorAll(`.filter__label`);
  return arrayFilters;
};

const onClickFilterBtn = () => {
  const filtersBtns = getArrayFiltersBtn();

  Array.from(filtersBtns).forEach((element, i) => {
    getFilterBtnClickHandler(filtersBtns, i);
  });
};

setElements();
onClickFilterBtn();

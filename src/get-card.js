export default (task, index) => {
  const isRepeatingTask = Object.values(task.repeatingDays).some((item) => item);

  const repeatingClass = isRepeatingTask ? ` card--repeat` : ``;

  const hasntags = [...task.tags].map((element) =>
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

  const days = Object.keys(task.repeatingDays).map((element) =>
    `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="repeat-${element}-${index}"
      name="repeat"
      value="mo"/>
    <label class="card__repeat-day" for="repeat-${element}-${index}">
      ${element}
    </label>`)
  .join(``);

  return `<article class="card card--${task.color} ${repeatingClass}">
    <form class="card__form" method="get">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn ${task.isDone ? `card__btn--archive` : ``}">
            archive
          </button>
          <button
            type="button"
            class="card__btn card__btn--favorites ${task.isFavorite ? `` : `card__btn--disabled`}">
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
              name="text">${task.title}
            </textarea>
          </label>
        </div>

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">no</span>
              </button>

              <fieldset class="card__date-deadline">
                <label class="card__input-deadline-wrap">
                  <input
                    class="card__date"
                    type="text"
                    placeholder="23 September"
                    name="date"
                    value="${task.dueDate}"
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
                repeat:<span class="card__repeat-status">${isRepeatingTask ? `yes` : `no`}</span>
              </button>

              <fieldset class="card__repeat-days" disabled>
                <div class="card__repeat-days-inner">
                ${days}
                </div>
              </fieldset>
            </div>

            <div class="card__hashtag">
              <div class="card__hashtag-list">
                ${hasntags}
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

          <label class="card__img-wrap card__img-wrap--empty">
            <input
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="${task.picture}"
              alt="task picture"
              class="card__img"
            />
          </label>

          <div class="card__colors-inner">
            <h3 class="card__colors-title">Color</h3>
            <div class="card__colors-wrap">
              <input
                type="radio"
                id="color-${task.color}-${index}"
                class="card__color-input card__color-input--black visually-hidden"
                name="color"
                value="black"
                checked
              />
              <label for="color-${task.color}-${index}" class="card__color card__color--${task.color}">
                ${task.color}
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

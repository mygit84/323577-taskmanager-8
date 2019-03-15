export default (title, number, isChecked = false, isDisabled = false) => {
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

import getCard from '../src/get-card';
import getFilter from '../src/get-filter';
import {getIntervalNum, getNewArray, getCleanContainer, renderElement} from '../src/utils';

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

const drawCards = (arr) => {
  arr.forEach((item) => {
    renderElement(TASKS_CONTAINER, getCard(item.color, item.text, item.isHashtag, item.isDate, item.isImage));
  });
};

const drawFilters = (arr) => {
  arr.forEach((item) => {
    renderElement(FILTERS_CONTAINER, getFilter(item.title, item.number, item.isChecked, item.isDisabled));
  });
};

const getArrayFiltersButton = () => {
  const arrayFilters = document.querySelectorAll(`.filter__label`);
  return arrayFilters;
};

const getFilterButtonClickHandler = (element, i) => {
  element[i].addEventListener(`click`, () => {
    getCleanContainer(TASKS_CONTAINER);
    drawCards(getNewArray(CARDS));
  });
};

const onClickFilterButton = () => {
  const filtersButtons = getArrayFiltersButton();

  Array.from(filtersButtons).forEach((element, i) => {
    getFilterButtonClickHandler(filtersButtons, i);
  });
};

const setElements = () => {
  drawFilters(FILTERS);
  drawCards(CARDS);
};

setElements();
onClickFilterButton();

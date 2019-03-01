import arrayObjectsTasks from '../src/data';
import getTask from '../src/get-card';
import getFilter from '../src/get-filter';
import {getNewArray, getCleanContainer, renderElement} from '../src/utils';


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


const drawCards = (arr) => {
  arr.forEach((item, i) => {
    renderElement(TASKS_CONTAINER, getTask(item, i));
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
    drawCards(getNewArray(arrayObjectsTasks()));
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
  drawCards(arrayObjectsTasks());
};

setElements();
onClickFilterButton();

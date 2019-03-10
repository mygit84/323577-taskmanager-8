import {getArrayObjectsTask} from '../src/data';
import getFilter from '../src/get-filter';
import Task from '../src/task';
import TaskEdit from '../src/task-edit';
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


const drawTasks = (arr) => {
  arr.forEach((item) => {
    const taskComponent = new Task(item);
    const editTaskComponent = new TaskEdit(item);
    const taskElement = taskComponent.render();
    const editTaskElement = editTaskComponent.render();

    taskComponent.onEdit = () => {
      TASKS_CONTAINER.replaceChild(editTaskElement, taskElement);

      editTaskComponent.onSubmit = () => {
        TASKS_CONTAINER.replaceChild(taskElement, editTaskElement);
      };
    };
    TASKS_CONTAINER.appendChild(taskElement);
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
    drawTasks(getNewArray(getArrayObjectsTask()));
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
  drawTasks(getArrayObjectsTask());
};

setElements();
onClickFilterButton();

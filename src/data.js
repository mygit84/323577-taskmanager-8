import {getRandomArray, getRandomElement, getIntervalNum, getRandomBoolean} from '../src/utils';


const moment = require(`moment`);


const MAX_NUMBER_TASKS = 7;
const MILLISECONDS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
const MIN_NUMBER_TAGS = 0;
const MAX_NUMBER_TAGS = 3;
const TITLES = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`];
const HASNTAGS = [
  `nomework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `lecture`,
  `githud`,
  `task`,
  `source`,
  `deadline`];
const COLORS = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`
];


const getRandomDate = () => {
  const minDate = Date.now() - MILLISECONDS_IN_WEEK;
  const maxDate = Date.now() + MILLISECONDS_IN_WEEK;

  return moment(getIntervalNum(minDate, maxDate)).format(`DD.MM.YYYY h:mm`);
};

const getLengthArrayHasntags = () => {
  const lengthArrayHasntags = getIntervalNum(MIN_NUMBER_TAGS, MAX_NUMBER_TAGS);

  return lengthArrayHasntags;
};

const getNewArrayHashtags = () => HASNTAGS.sort(getRandomArray).slice(0, getLengthArrayHasntags());

const getObjectTask = () => ({
  title: getRandomElement(TITLES),
  dueDate: getRandomDate(),
  tags: getNewArrayHashtags(),
  picture: `http://picsum.photos/100/100?r=${Math.random()}`,
  color: getRandomElement(COLORS),
  repeatingDays: {
    'Mo': getRandomBoolean(),
    'Tu': getRandomBoolean(),
    'We': getRandomBoolean(),
    'Th': getRandomBoolean(),
    'Fr': getRandomBoolean(),
    'Sa': getRandomBoolean(),
    'Su': getRandomBoolean()
  },
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean()
});

const getArrayObjectsTask = () => {
  const tasks = [];

  for (let i = 0; i < MAX_NUMBER_TASKS; i++) {
    tasks.push(getObjectTask());
  }

  return tasks;
};


export {getArrayObjectsTask, COLORS};

import {getRandomArray, getRandomElement, getIntervalNum, getRandomBoolean} from '../src/utils';


const MAX_NUMBER_TASKS = 7;
const NUMBER_WEEK = 1;
const DAY_PER_WEEK = 7;
const HOUR_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;
const MILLISECONDS_PER_SECOND = 1000;
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
  const millisecomdInWeek = NUMBER_WEEK * DAY_PER_WEEK * HOUR_PER_DAY * MINUTES_PER_HOUR
   * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
  const minDate = Date.now() - millisecomdInWeek;
  const maxDate = Date.now() + millisecomdInWeek;
  const newRandomDate = getIntervalNum(minDate, maxDate);

  return newRandomDate;
};

const convertDate = () => {
  const date = new Date();

  date.setTime(getRandomDate());

  return (`0` + date.getDate()).slice(-2) + `.` + (`0` + (date.getMonth() + 1))
  .slice(-2) + `.` + date.getFullYear();
};

const getLengthArrayHasntags = () => {
  const lengthArrayHasntags = getIntervalNum(MIN_NUMBER_TAGS, MAX_NUMBER_TAGS);

  return lengthArrayHasntags;
};

const getNewArrayHashtags = () => HASNTAGS.sort(getRandomArray).slice(0, getLengthArrayHasntags());

const getObjectTask = () => ({
  title: getRandomElement(TITLES),
  dueDate: convertDate(),
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

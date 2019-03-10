const getRandomArray = () => Math.random() - 0.5;

const getRandomBoolean = () => Boolean(Math.floor(Math.random() * 2));

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getIntervalNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getNewArray = (arr) => {
  const randomNum = getIntervalNum(1, arr.length + 1);

  return arr.slice(0, randomNum);
};

const getCleanContainer = (container) => {
  container.innerHTML = ``;
};

const renderElement = (container, element) => {
  container.insertAdjacentHTML(`beforeEnd`, element);
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};


export {getRandomArray, getRandomBoolean, getNewArray, getRandomElement, getIntervalNum, getCleanContainer, renderElement, createElement};

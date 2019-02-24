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

export {getNewArray, getCleanContainer, renderElement};

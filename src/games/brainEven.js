import runGame from '..';

const title = 'Brain Even title';
const getQuestion = () => {
  const randomNum = Math.round(Math.random() * 10);
  return {
    question: randomNum,
    answer: (randomNum % 2 === 0) ? 'yes' : 'no',
  };
};

const Game = { title, getQuestion };

export default runGame(Game);

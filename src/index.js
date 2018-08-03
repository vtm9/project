import readlineSync from 'readline-sync';

const gameCycle = (game, gameState) => {
  if (gameState.counter === 3) { return console.log('You won'); }
  if (gameState.failed) { return console.log('Sorry try again'); }

  const questionObj = game.getQuestion();

  console.log(`Question: ${questionObj.question}`);
  const answer = readlineSync.question('Your answer: ');

  const newGameState = (answer === questionObj.answer) ?
    { counter: gameState.counter += 1, failed: false, userName: gameState.userName } :
    { counter: gameState.counter += 1, failed: true, userName: gameState.userName };
  return gameCycle(game, newGameState);
};

const runGame = game => () => {
  console.log('Welcome ...');
  console.log(game.title);
  const userName = 'Kos'; // enterName from cli
  const gameState = { userName, counter: 0, failed: false };
  gameCycle(game, gameState);
};

export default runGame;

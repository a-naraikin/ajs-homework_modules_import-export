// TODO: write your code here
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js'

const game = new Game();
game.start();

console.log('app worked');
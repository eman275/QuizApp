import { all } from 'redux-saga/effects';
import startGame from './sagas/gameInit';
import game from './sagas/game'


export default function* rootSaga() {
  yield all([startGame(), game()]);
}

import { take , fork , put , call , delay,cancel} from 'redux-saga/effects';
import {startGame , cancelGame} from '../slices/gameInit'
import {fetchQuestionFromApi} from '../../utils/api'
import {fetchQuestionsSuccess,fetchQuestionsFail} from '../slices/game'

function* fetchQuestionSage() {
    try{
        yield delay (500);
        const data = yield call(fetchQuestionFromApi);
        yield put(fetchQuestionsSuccess(data))
    } catch(error){
        yield put (fetchQuestionsFail('error with fetching the questions'));

    }
}
function* cancelFetchQuiz (forkSage){
    while(true){
        yield take(cancelGame.type);
        yield cancel(forkSage);
    }
}
export default function* startGameSage(){
    while(true){
        yield take(startGame.type)
      const forkSage=  yield fork (fetchQuestionSage);
         yield fork(cancelFetchQuiz , forkSage)
    } 
}
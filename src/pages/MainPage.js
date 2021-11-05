import React from 'react'
import { useSelector } from 'react-redux'
import StartGame from './StartGame'
import Game from './GamePage'
import Fetching from './FetchingGamePage'
import EndGame from './EndGamePage'
import * as stages from '../utils/constants'

const MainPage = () => {
    const currentStage = useSelector((state) => state.gameState.stage);
    let displayedPage;
      switch (currentStage) {
          case stages.START_GAME:
              displayedPage= <StartGame />
              break ;
              case stages.FETCHING_GAME:
                  displayedPage = <Fetching/>
                break;
                case stages.GAME:
                    displayedPage= <Game/>
                    break;
                    case stages.END_GAME : 
                    displayedPage = <EndGame/>
                    break;
                    default:
                        break;


      }
    return<div className="font-mono bg-purple-50 min-h-screen">  
     {displayedPage}
     </div>;
       
        
       
    
};

export default MainPage

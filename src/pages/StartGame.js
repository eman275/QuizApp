import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import {startGame} from '../store/slices/gameInit'
import Button from '../components/Button';


const StartGame = () => {
    const [username ,setUsername] = useState('');
    const dispatch = useDispatch();
    
  const startGameHandler = () => {
    dispatch(startGame({username}));
  };
    return (
        <div className="flex flex-col justify-center items-center mt-80">
          <input 
          className='py-2 px-4 outline-none rounded shadow w-64 mb-6'
          value={username} 
          onChange={e=> setUsername(e.target.value)} 
          placeholder="Enter Your Name" />
          <Button onClick={startGameHandler} >Submit</Button>
        </div>
    );
};

export default StartGame

import { useState } from 'react';
import './App.css';
import cross from './img/cross.svg'
import play from './img/play.svg'

function App() {

  const [step, setStep] = useState('menu')

  return (
    <div className='wrapper'>
      {step === 'menu' ? (
        <div className='menuWrapper'>
          <div className='menuWrapper__title'>
            <p>HANGMAN</p>
            <p>Game</p>
          </div>

          <button 
            className='menuWrapper__play'
            onClick={() => setStep('choise topic')}
          >
            <img src={play}/>
          </button>

          <button 
            className='menuWrapper__rules'
            onClick={() => setStep('rules')}
          >HOW TO PLAY</button>
        </div>
      ) : step === 'rules' ? (
        <div className='rulesWrapper'>
          <h1>RULES</h1>
          <div>
            <p>1.</p>
            <p>Guess the secret word one letter at a time.</p>
          </div>
          <div>
            <p>2.</p>
            <p>Each incorrect guess adds a part to the hangman.</p>
          </div>
          <div>
            <p>3.</p>
            <p>Correct guesses reveal every occurrence of that letter in the word.</p>
          </div>
          <div>
            <p>4.</p>
            <p>Guess the entire word before the hangman is complete to win!</p>
          </div>
          <div>
            <p>5.</p>
            <p>You have a limited number of attempts, so choose your letters wisely.</p>
          </div>
          <div>
            <p>6.</p>
            <p>Guess a letter only once - repeated guesses won't count as a new attempt.</p>
          </div>

          <div className='rulesWrapper__close'>
            <button onClick={() => setStep('menu')}>
              <img src={cross}/>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;

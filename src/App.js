import { useState } from 'react';
import './App.css';
import cross from './img/cross.svg'
import play from './img/play.svg'
import back from './img/back.svg'

function App() {

  const [step, setStep] = useState('menu')
  const [topic, setTopic] = useState('')
  const [currentWord, setCurrentWord] = useState('')

  const categoryList = ['MOVIES', 'TV SHOW', 'COUNTRIES', 'CAPITAL CITIES', 'ANIMALS', 'SPORTS']

  const categories = {
    'MOVIES': [
      'TITANIC',
      'AVATAR',
      'INCEPTION',
      'GLADIATOR',
      'JAWS',
      'JAWS',
    ],

    'TV SHOW': [
      'BREAKING BAD',
      'FRIENDS',
      'STRANGER THINGS',
      'THE OFFICE',
      'SHERLOCK'
    ],

    'COUNTRIES': [
      'UKRAINE',
      'AUSTRALIA',
      'ARGENTINA',
      'PORTUGAL',
      'JAPAN'
    ],

    'CAPITAL CITIES': [
      'LONDON',
      'TOKYO',
      'PARIS',
      'CANBERRA',
      'BUDAPEST'
    ],

    'ANIMALS': [
      'ELEPHANT',
      'KANGAROO',
      'CROCODILE',
      'PENGUIN',
      'GIRAFFE'
    ],

    'SPORTS': [
      'FOOTBALL',
      'BASKETBALL',
      'VOLLEYBALL',
      'SWIMMING',
      'BOXING'
    ]
  };

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
      ) : step === 'choise topic' ? (
        <div className='listTopicWrapper'>
          <h1>Pick a CategoryList</h1>

          {categoryList.map((item, index) => (
            <button 
              onClick={() => {
                setStep('game')
                setTopic(item)

                const choiceWord = Math.floor(Math.random() * categories[item].length)
                setCurrentWord(categories[item][choiceWord])
              }}
              className={index % 2 === 0 ? 'listTopicWrapper__firstItem' : 'listTopicWrapper__secondItem'}
            >{item}</button>
          ))}

          <button 
            className='listTopicWrapper__back'
            onClick={() => setStep('menu')}
            >
            <img src={back}/>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
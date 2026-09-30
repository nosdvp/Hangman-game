import { useEffect, useState } from 'react';
import './App.css';
import cross from './img/cross.svg'
import play from './img/play.svg'
import back from './img/back.svg'
import menu from './img/menu.svg'
import heart from './img/heart.svg'

function App() {

  const [step, setStep] = useState('menu')
  const [topic, setTopic] = useState('')
  const [currentWord, setCurrentWord] = useState('')

  const [life, setLife] = useState(4)
  const [lifeClass, setLifeClass] = useState('')
  const [menuBlock, setMenuBlock] = useState(false)

  useEffect(() => {
    if(life === 5){
      setLifeClass('gameFieldWrapper__navBar_health_healthBar_fiveLife')
    }else if(life === 4){
      setLifeClass('gameFieldWrapper__navBar_health_healthBar_fourLife')
    }else if(life === 3){
      setLifeClass('gameFieldWrapper__navBar_health_healthBar_threeLife')
    }else if(life === 2){
      setLifeClass('gameFieldWrapper__navBar_health_healthBar_twoLife')
    }else if(life === 1){
      setLifeClass('gameFieldWrapper__navBar_health_healthBar_oneLife')
    }
  }, [life])

  const categoryList = ['MOVIES', 'TV SHOW', 'COUNTRIES', 'CAPITAL CITIES', 'ANIMALS', 'SPORTS']

  const firstLineLetters = 'QWERTYUIOP'
  const secondLineLetters = 'ASDFGHJKL'
  const thirdLineLetters = ' ZXCVBNM '

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
          <h1>Pick a Category</h1>

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
      ) : step === 'game' ? (
        <div className='gameFieldWrapper'>
          <div className='gameFieldWrapper__navBar'>
            <div className='gameFieldWrapper__navBar_nav'>
              <button
                onClick={() => setMenuBlock(true)}
              >
                <img src={menu}></img>
              </button>
              <p>{topic}</p>
            </div>

            <div className='gameFieldWrapper__navBar_health'>
              <div className='gameFieldWrapper__navBar_health_healthBar'>
                <div className={lifeClass}></div>
              </div>
              <img src={heart}/>
            </div>
          </div>
          <div className='gameFieldWrapper__firstStringLetter'>
            <div className='gameFieldWrapper__firstStringLetter_first'>
              {firstLineLetters.split('').map((item, index) => (
                <button>{item}</button>
              ))}
            </div>

            <div className='gameFieldWrapper__firstStringLetter_second'>
              {secondLineLetters.split('').map((item, index) => (
                <button>{item}</button>
              ))}
            </div>

            <div className='gameFieldWrapper__firstStringLetter_third'>
              {thirdLineLetters.split('').map((item, index) => (
                <button>{item}</button>
              ))}
            </div>
          </div>
          {menuBlock === true ? (
              <div className='gameFieldWrapper__menu'>
                <h1>Menu</h1>
                <button 
                  className='gameFieldWrapper__menu_even' 
                  onClick={() => {
                    setStep('menu')
                    setMenuBlock(false)
                  }}
                >GO TO HOME</button>
                <button 
                  className='gameFieldWrapper__menu_odd'
                  onClick={() => {
                    setStep('choise topic')
                    setMenuBlock(false)
                  }}
                >CHANGE CATEGORY</button>
                <button 
                  className='gameFieldWrapper__menu_even'
                  onClick={() => setMenuBlock(false)}
                >CLOSE</button>
              </div>
            ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default App;
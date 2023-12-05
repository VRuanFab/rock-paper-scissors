import { useState } from 'react';

import defaultImage from './images/defaultImage.jpg'
import paper from './images/paper.png';
import rock from './images/rock.png';
import scissors from './images/scissors.png'

function App() {

  const [oponent, setOponent] = useState(defaultImage)
  const [escolha, setEscolha] = useState([])

  function click(){
    const choice = Math.floor(Math.random() * 3 + 1)
    switch (choice){
      case 1:
          setOponent(paper)
        break;
      
      case 2:
          setOponent(rock)
        break;

      case 3:
          setOponent(scissors)
        break;
    }

      const pedra = document.getElementById('Pedra')
      const papel = document.getElementById('Papel')
      const tesoura = document.getElementById('Tesoura')
  
      switch (pedra){
        case choice === 1:
          console.log('you win')
          break;
      }
  }

  const style = ['w-[10rem] h-[9rem]']

  return (
    <div className=''>
      <h1 className='flex justify-center mt-3'>Pedra, papel, tesoura</h1>

      <div className='flex justify-center mt-10'>
        <img src={oponent} alt='papel' className={style[0]}/>
        {escolha === null? (<></>):(
          <img src={escolha} alt='escolha'/>
        )}
      </div>

      <div>
        Escolha:
        <div className='flex space-x-10'>

          <label for='Pedra'>
            <img src={rock} alt='Pedra' className={style[0]}/>
          </label>
          <input type='radio' id='Pedra' name='choice'/>

          <label for='Papel'>
            <img src={paper} alt='Papel' className={style[0]}/>
          </label>
          <input type='radio' id='Papel' name='choice'/>

          <label for='Tesoura'>
            <img src={scissors} alt='Tesoura' className={style[0]}/>
          </label>
          <input type='radio' id='Tesoura' name='choice'/>

        </div>

        <input type='button' value='Jogar' onClick={click} className='border-2 p-1 bg-[#f0f0f0]'/>
        
      </div>
    </div>
  )
}

export default App

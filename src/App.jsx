import { useState } from 'react';

import defaultImage from './images/defaultImage.jpg'
import paper from './images/paper.png';
import rock from './images/rock.png';
import scissors from './images/scissors.png'

function App() {

  const [choice, setchoice] = useState(defaultImage)
  const [escolha, setEscolha] = useState([])
  const [resultado, setResultado] = useState([])

  const pedra = document.getElementById('Pedra')
  const papel = document.getElementById('Papel')
  const tesoura = document.getElementById('Tesoura')

  function click(){
    const choice = Math.floor(Math.random() * 3 + 1)

    switch (choice){
      case 1:
          setchoice(paper)
        break;
      
      case 2:
          setchoice(rock)
        break;

      case 3:
          setchoice(scissors)
        break;
    }
    
    if (pedra.checked && choice === 1 || papel.checked && choice === 3 || tesoura.checked && choice === 2){
      setResultado('Perdeu')
    } else if (pedra.checked && choice === 3 || papel.checked && choice === 2 || tesoura.checked && choice === 1){
      setResultado('Ganhou')
    } else {
      setResultado('Empatou')
    }
  }

  const style = ['w-[10rem] h-[9rem]']

  return (
    <div className=''>
      <h1 className='flex justify-center mt-3'>Pedra, papel, tesoura</h1>

      <div>
        <div className='flex justify-center mt-10 space-x-28'>

          <img src={choice} alt='papel' className={style[0]}/>

          {
          choice === defaultImage? (<></>):
          pedra.checked? (<img src={rock} alt='papel' className={style[0]}/>):
          papel.checked? (<img src={paper} alt='papel' className={style[0]}/>):
          (<img src={scissors} alt='tesoura' className={style[0]}/>)
          }

        </div>

        {resultado}
      </div>

      <div>
        Escolha:
        <div className='flex space-x-10'>

          <div>
            <label for='Pedra'>
              <img src={rock} alt='Pedra' className={style[0]}/>
            </label>
            <input type='radio' id='Pedra' name='choice'/>
          </div>

          <div>
            <label for='Papel'>
              <img src={paper} alt='Papel' className={style[0]}/>
            </label>
            <input type='radio' id='Papel' name='choice'/>
          </div>

          <div>
            <label for='Tesoura'>
              <img src={scissors} alt='Tesoura' className={style[0]}/>
            </label>
            <input type='radio' id='Tesoura' name='choice'/>
          </div>

        </div>

        <input type='button' value='Jogar' onClick={click} className='border-2 p-1 bg-[#f0f0f0]'/>
        
      </div>
    </div>
  )
}

export default App

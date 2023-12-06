import { useState } from 'react';

import defaultImage from './images/defaultImage.jpg'
import paper from './images/paper.png';
import rock from './images/rock.png';
import scissors from './images/scissors.png';

function App() {

  const [choice, setChoice] = useState(defaultImage)
  const [resultado, setResultado] = useState([])

  const pedra = document.getElementById('Pedra')
  const papel = document.getElementById('Papel')
  const tesoura = document.getElementById('Tesoura')

  function click(){
    const choice = Math.floor(Math.random() * 3 + 1)

    switch (choice){
      case 1:
          setChoice(paper)
        break;

      case 2:
          setChoice(rock)
        break;

      case 3:
          setChoice(scissors)
        break;
    }
    
    if (pedra.checked && choice === 1 || papel.checked && choice === 3 || tesoura.checked && choice === 2){
      setResultado('Perdeu')
    } else if (pedra.checked && choice === 3 || papel.checked && choice === 2 || tesoura.checked && choice === 1){
      setResultado('Ganhou')
    } else {
      setResultado('Empatou')
    }

    if (!pedra.checked && !papel.checked && !tesoura.checked){
      setChoice(defaultImage)
      setResultado('Escolha uma opção')
    }
  }

  const style = ['w-[12rem] h-[10.5rem]', 'grid space-y-3', 'justify-self-center border-b-2 text-xl mt-2 font-semibold']

  return (
    <div className=''>
      <h1 className='flex justify-center mt-3 text-4xl'>Pedra - papel - tesoura</h1>

      <div className='grid'>

        <div className='flex justify-center mt-10 space-x-28'>

          <div className='grid'>
            <img src={choice} alt='papel' className={style[0]}/>
            {choice === defaultImage? (<></>):(<span className={`${style[2]} border-red-600`}>Oponente</span>)}
          </div>

            {
            choice === defaultImage? (<></>):
            pedra.checked? (<div className='grid'>
              <img src={rock} alt='papel' className={style[0]}/> 
              <span className={`${style[2]} border-blue-600`}>Você</span>
            </div>):
            papel.checked? (<div className='grid'>
              <img src={paper} alt='papel' className={style[0]}/>
              <span className={`${style[2]} border-blue-600`}>Você</span>
            </div>):
            (<div className='grid'>
              <img src={scissors} alt='tesoura' className={style[0]}/>
              <span className={`${style[2]} border-blue-600`}>Você</span>
            </div>)
            }

        </div>
        <span className='justify-self-center m-6 text-3xl'>{resultado}</span>
      </div>

      <div className='grid justify-center'>
        <span className={`${style[2]} mb-5`}>Escolha</span>

        <div className='flex space-x-10 justify-center'>

          <div className={style[1]}>
            <label for='Pedra'>
              <img src={rock} alt='Pedra' className={style[0]}/>
            </label>
            <input type='radio' id='Pedra' name='choice'/>
          </div>

          <div className={style[1]}>
            <label for='Papel'>
              <img src={paper} alt='Papel' className={style[0]}/>
            </label>
            <input type='radio' id='Papel' name='choice'/>
          </div>

          <div className={style[1]}>
            <label for='Tesoura'>
              <img src={scissors} alt='Tesoura' className={style[0]}/>
            </label>
            <input type='radio' id='Tesoura' name='choice'/>
          </div>

        </div>

        <input type='button' value='Jogar' onClick={click} className='justify-self-center border-2 p-1 
        w-20 bg-[#f0f0f0] mt-7 hover:cursor-pointer'/>
        
      </div>
    </div>
  )
}

export default App

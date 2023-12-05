import { useState } from 'react';

import defaultImage from './images/defaultImage.jpg'
import paper from './images/paper.png';
import rock from './images/rock.png';
import scissors from './images/scissors.png'

function App() {

  const [click, setClick] = useState(defaultImage)

  function clickou(){
    const choice = Math.floor(Math.random() * 3 + 1)
    switch (choice){
      case 1:
          setClick(paper)
        break;
      
      case 2:
          setClick(rock)
        break;

      case 3:
          setClick(scissors)
        break;
    }
    console.log(choice)
  }

  return (
    <div className=''>
      Eae
      <img src={click} alt='papel' className='w-[7rem] h-[6rem]'/>
      <input type='button' value='Aperte' onClick={clickou} className='border-2 p-1 bg-[#f0f0f0]'/>
    </div>
  )
}

export default App

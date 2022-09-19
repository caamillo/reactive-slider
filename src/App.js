// React
import { useState, useEffect } from 'react';

// Tailwind
import './tailwind/output.css'

// CSS
import './css/slider.css'

function App() {

  const kasTick = 1e3

  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    ;(async () => {
      fetch('http://192.168.178.25:5000/board/kas/getKas?wait=false')
      .then(res => res.text())
      .then(data => {
        const power = JSON.parse(data)['kas']['power']
        console.log('Start Power', power)
        document.getElementById('slider').value = power
      })
    })()
  }, [])

  const changeKas = (e) => {
    if (!isChanging) {
      setIsChanging(true)
    }
  }

  useEffect(() => {

    const uploadData = async (power) => await fetch(`http://localhost:5000/board/kas/change?power=${power}`, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
    })

    if (isChanging) {
      setTimeout(async () => {
        const power = document.getElementById('slider').value
        console.log('prevData', power)
        await uploadData(power)
        setIsChanging(false)
      }, kasTick)
    }
  }, [isChanging])

  return (
    <div className="App h-screen">
      <div className='flex items-center justify-center h-full'>
        <div className='slider-container bg-[#0f0f0f] md:aspect-video h-[65%] w-[65%] m-[30px] flex justify-center items-center rounded-lg'>
          <input id="slider" type="range" min="0" className='slider' max="100" defaultValue="0" step="1" onChange={ changeKas }/>
        </div>
      </div>
    </div>
  );
}

export default App;

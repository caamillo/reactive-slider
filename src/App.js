// React
import { useState, useEffect } from 'react';

// Tailwind
import './tailwind/output.css'

function App() {

  const [isSliding, setIsSliding] = useState(false)
  const sliderBarOffsetY = 14
  const sliderBarMaxY = 83
  const sliderBarMinY = 9

  const getRelativeCoordinates = (event, referenceElement) => {

    const position = {
      x: event.pageX,
      y: event.pageY
    };
  
    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop
    };
  
    return { 
      x: position.x - offset.left,
      y: position.y - offset.top,
    }; 
  
  }

  useEffect(() => {
    const sliderBar = document.getElementById('slider-bar')
    const sliderBtn = document.getElementById('slider-button')

    sliderBtn.addEventListener('mousedown', (e) => {
      if (!isSliding) {
        sliderBtn.style.backgroundColor = '#8359ac'
        setIsSliding(true)
        console.log('sliding')
        const sliderHeight = parseInt(sliderBar.getBoundingClientRect().height) - sliderBarOffsetY
        const cursorY = getRelativeCoordinates(e, document.getElementById('slider-bar')).y
        console.log(sliderHeight - cursorY)
      }
    })
  }, [])

  useEffect(() => {
    const root = document.getElementById('root')

    const sliderBar = document.getElementById('slider-bar')
    const sliderBtn = document.getElementById('slider-button')

    const endSliding = (e) => {
      if (isSliding) {
        console.log('end sliding')
        sliderBtn.style.backgroundColor = '#a26ed2'
        setIsSliding(false)
        const sliderHeight = parseInt(sliderBar.getBoundingClientRect().height) - sliderBarOffsetY
        const cursorY = getRelativeCoordinates(e, document.getElementById('slider-bar')).y
        const slidingPerc = ((sliderHeight - cursorY) / sliderHeight) * 100
        let barPerc = sliderBarMaxY - ((slidingPerc * (sliderBarMaxY - sliderBarMinY)) / 100)
        if (barPerc > sliderBarMaxY) barPerc = sliderBarMaxY
        else if (barPerc < sliderBarMinY) barPerc = sliderBarMinY
        sliderBtn.style.top = barPerc + '%'
        console.log(barPerc)
      }
    }

    root.addEventListener('mouseup', endSliding)

    return () => {
      root.removeEventListener('mouseup', endSliding)
    }
  }, [isSliding])

  return (
    <div className="App h-screen bg-[#121212]">
      <div className='flex items-center justify-center h-full'>
        <div className='bg-[#0f0f0f] aspect-video w-[50%] flex justify-center rounded-lg'>
          <div id='slider-bar' className='bg-[#454545] h-full m-5 w-[15px] rounded-md flex flex-col items-center justify-end'>
            <div id='slider-button' className='aspect-square w-[40px] bg-[#a26ed2] flex justify-center items-center rounded-[50%] cursor-default absolute top-[83%]'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

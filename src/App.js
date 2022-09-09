// React
import { useState, useEffect } from 'react';

// Tailwind
import './tailwind/output.css'

// CSS
import './css/slider.css'

function App() {

  return (
    <div className="App h-screen bg-[#121212]">
      <div className='flex items-center justify-center h-full'>
        <div className='bg-[#0f0f0f] aspect-video w-[50%] flex justify-center items-center rounded-lg'>
          <input id="typeinp" type="range" min="0" className='slider' max="100" defaultValue="0" step="1" onChange={ (e) => console.log(e.target.value) }/>
        </div>
      </div>
    </div>
  );
}

export default App;

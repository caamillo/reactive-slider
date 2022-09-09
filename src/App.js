import './tailwind/output.css'

function App() {
  return (
    <div className="App h-screen bg-[#121212]">
      <div className='flex items-center justify-center h-full'>
        <div className='bg-black aspect-video w-[80%] flex justify-center rounded-lg'>
          <div id='slider-bar' className='bg-[#ff0000] h-full m-5 w-[15px] rounded-md flex flex-col items-center'>
            <div id='slider-button' className='aspect-square w-[30px] bg-[#0000ff] flex justify-center items-center rounded-[50%]'>
              t
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

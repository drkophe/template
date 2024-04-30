import './App.css'

function App() {


  return (
    <main className='flex flex-col items-center justify-center'>
      <h1>Hello World</h1>
      <p>My name is Anastasia</p>
      <div id='layout' className='flex border-2 border-blue-700 w-3/4'>
        <div className='w-1/4 h-10 bg-slate-500 border-2 border-red-600'></div>
        <div className='w-1/4 h-10 bg-slate-500 border-2 border-red-600'></div>
        <div className='w-1/4 h-10 bg-slate-500 border-2 border-red-600'></div>
        <div className='w-1/4 h-10 bg-slate-500 border-2 border-red-600'></div>
      </div>
    </main>
  )
}

export default App

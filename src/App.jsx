import './App.css'

function  Nav() {
  return (
    <div className='nav'>
      <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#213547"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      <h2>Build your CV</h2>
    </div>
  )
}


function Main() {
  return (
    <div className='main'>main</div>
  )
}


function App() {

  return (
    <>
      <Nav/>
      <Main/>
    </>
  )
}

export default App

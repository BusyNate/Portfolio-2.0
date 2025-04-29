import Home from './Pages/Landing Page/Home'
import WorkFlow from './Pages/Workflow Page/WorkFlow'
import './App.css'
function App() {



  const home = {
    title:"Hello, I'm Manqoba Nathan Mtetwa",
    desr: "I am a Designer and Developer based in Johannesburg. I zealously strive towards carefully designing beautiful UIs, writing clean and efficient code for web-applications and managing technical projects. As a fresh graduate from Belgium Campus, I am eager to land my first role as a",
    p:"Junior Developer.",
    CVlink: "-------", img: './src/assets/Me.png'
  }
  return (
    <>
    <Home home={home}></Home>
    <WorkFlow/>
    </>
  )
}

export default App

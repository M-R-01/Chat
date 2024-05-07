import Login from './pages/Login'
import Chat from './pages/Chat'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>   
  )
}

export default App

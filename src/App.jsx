import './App.scss'
import Header from './components/header/header'
import Works from './routes/works/works'
import Home from './routes/home/home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="works" element={ <Works /> } />
      </Routes>
    </div>
  )
}

export default App

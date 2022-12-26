import './App.scss'
import Text from './Components/Text/Text'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className="App">
      <Header />
      <Text tag="h2" size="xl" color='main' >Hello World 2</Text>
      <Text tag="p" size="l" typo='secondary' >Hello World 2</Text>
      <Text tag="h5" size="m" typo='secondary' >Hello World 2</Text>
      <Text tag="h1" size="s" >Hello World 2</Text>
    </div>
  )
}

export default App

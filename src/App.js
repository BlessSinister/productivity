import './App.css'
import Header from './components/Header'
import Preloade from './components/Preloade'
const arr = [1]
function App() {
  return (
    <div className="App">{arr.length == 0 ? <Preloade /> : <Header />}</div>
  )
}

export default App

import {Routes, Route} from 'react-router-dom'
import {Landing} from './pages/Landing'
import {Dates} from './pages/Dates'

const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/dates' element={<Dates />} />
    </Routes>
    )
}

export default App

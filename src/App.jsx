import './App.css'

//Imports
import Static from './components/Static.jsx'
import Header from './components/Header.jsx'

// NavBar
import { Route, Routes } from 'react-router-dom';

function App() {

return (
  <>
  <div>
    <nav>
      <Header />
      <Routes>
        <Route/>
          <Route path='/Static' element={<Static />} />
        </Routes>
    </nav>
  </div>
  </>
  )
}

export default App
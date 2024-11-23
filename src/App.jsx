import './App.css'

//Imports
import ReactFacts from './components/ReactFacts.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx';

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
          <Route path='/ReactFacts' element={<ReactFacts />} />
        </Routes>
    </nav>
      <Footer/>
  </div>
  </>
  )
}

export default App
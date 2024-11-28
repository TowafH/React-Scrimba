import './App.css'

// Projects
import ReactFacts from './components/projects/ReactFacts/ReactFacts.jsx'
import TravelJournal from './components/projects/TravelJournal/TravelJournal.jsx'

// Challenges
import CatContact from './components/challenges/CatContact/CatContact.jsx'
import JokesApp from './components/challenges/Jokes/JokesApp.jsx'

// Backbone
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
          <Route path='/CatContact' element={<CatContact/>} />
          <Route path='/JokesApp' element={<JokesApp/>}/>
          <Route path='/TravelJournal' element={<TravelJournal/>}/>
        </Routes>
    </nav>
      <Footer/>
  </div>
  </>
  )
}

export default App
import {Route, Switch} from 'wouter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Buenamano from './components/buenamano/BuenaMano';
import SpaceHelp from './components/spacehelp/SpaceHelp';
import './App.css'

function App() {
  

  return (
    <>
    <Header />
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/Buenamano' component={Buenamano}/>
      <Route path='/Spacehelp' component={SpaceHelp}/>
    </Switch>
    <Footer />
     
    </>
  )
}

export default App

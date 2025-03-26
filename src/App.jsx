import { Route, Switch } from "wouter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Buenamano from "./components/buenamano/BuenaMano";
import SpaceHelp from "./components/spacehelp/SpaceHelp";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NovaNit from "./components/novaNit/NovaNit";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/Novanit" component={NovaNit} />
        <Route path="/Buenamano" component={Buenamano} />
        <Route path="/Spacehelp" component={SpaceHelp} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

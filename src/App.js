import './App.css';
import Nav from './Components/Navbars/Const/Nav_header'
import Navbar from './Components/Navbars/Index';
import Carousel from './Components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar/>
      <Carousel/>
    </div>
  );
}

export default App;

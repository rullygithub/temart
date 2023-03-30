import './App.css';
import Nav from './Components/Navbars/Const/Nav_header'
import Search from './Components/Navbars/Const/Search';
import Navbar from './Components/Navbars/Index';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Navbar/>
      <Search/>
    </div>
  );
}

export default App;

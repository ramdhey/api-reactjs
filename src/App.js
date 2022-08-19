
import './App.css';
import Footernya from './Komponen/Footernya/Footernya';
import Konten from './Komponen/Konten/News';


import Navbarnya from './Komponen/Navbarnya/Navbarnya';

function App() {
  return (
    <div className="App">
      <Navbarnya/>
      <Konten/>
      {/* <Konten/> */}
      <Footernya/>
    </div>
  );
}

export default App;

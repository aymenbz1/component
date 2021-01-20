import logo from './logo.svg';
import './App.css';
import Photo from "./component/profile/ProfilPhoto"
import Name from "./component/profile/FullName"
import Adress from "./component/profile/Adress"

function App() {
  return (
   <div className="app">
     <Photo/>
     <Name/>
     <Adress/>
   </div>
  );
}
export default App;

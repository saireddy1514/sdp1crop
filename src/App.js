import './App.css';
import Login from '../src/Components/Login/Login';
import Signup from './Components/Register/Signup';
import ContactUs from './Components/ContactUs/Contactus';
import {Router,Routes,Route} from 'react-router-dom'
import Navbar from '../src/Components/Navbar/Navbar';
function App() {
  return (
  <div className="App">
    <Routes>
        <Route path='/feedback' element={<><ContactUs /></>}/>
      <Route path='/login' element={<><Login /></>}/>
      <Route path='/register' element={<><Signup /></>}/>
      <Route exact path='/dashboard' element={<><Navbar dashboard={true}/></>}/>
      <Route exact path="/checkout" element={<><Navbar checkout={true}/></>}/>
      <Route exact path="/shopping" element={<><Navbar shopping={true}/></>}/>
      <Route exact path="/buyers" element={<><Navbar buyers={true}/></>}/>
      <Route exact path="/sellers" element={<><Navbar sellers={true}/></>}/>
    </Routes>
    <br/><br/>
    </div>
  );
}

export default App;

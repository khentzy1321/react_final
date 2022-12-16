import './Mystyle.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Employee from './components/Employee';
import EmploCreate from './components/EmploCreate';
import EmploDetails from './components/EmploDetails';
import EmploEdit from './components/EmploEdit';
import Home from './layouts/Home';
import Navbar from './layouts/Navbar';
import About from './layouts/About';



function App() {
  return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home/>}></Route>
            <Route path='/emp' element={<Employee />}></Route>
            <Route path='/employee/create' element={<EmploCreate />}></Route>
            <Route path='/employee/detail/:empid' element={<EmploDetails />}></Route>
            <Route path='/employee/edit/:empid' element={<EmploEdit />}></Route>
            <Route path='/about' element={<About />}></Route>
        </Routes>
        </Router>
    </div>
       
   
  );

}


export default App;

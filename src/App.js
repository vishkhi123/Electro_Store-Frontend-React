

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/pages/users/Index';
import About from './components/pages/users/About';
import Dashboard from './components/pages/users/Dashboard';
import Profile from './components/pages/users/Profile';
import AboutUser from './components/pages/users/AboutUser';
import Services from './components/pages/users/Services';
import Cart from './components/pages/users/Cart';
import CustomNavbar from './components/pages/users/CustomNavbar';
import Contact from './components/pages/users/Contact';


function App() {

 
  return (
  // setting up routing 
   
     <BrowserRouter>
     <CustomNavbar/>
  
     <Routes>
       <Route path='/' element=<Index/> />
       <Route path='/about' element=<About/> />
       <Route path='/services' element=<Services/> />
       <Route path='/cart' element=<Cart/> />
       <Route path='/contact' element=<Contact/> />
       <Route path='/user' element=<Dashboard/> >
             {/*nested route me "/" allowed nai he and parent me outlet dena padega */}
           <Route path='profile' element=<Profile/>/>
           <Route path='aboutUser' element=<AboutUser/>/>

       </Route>
     </Routes>
     
   </BrowserRouter>



  );

  
   

   
  
}

export default App;

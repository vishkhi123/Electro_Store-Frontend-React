

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
import { Flip, ToastContainer} from 'react-toastify';
import Login from './components/pages/users/Login';
import Register from './components/pages/users/Register';
import Home from './components/pages/users/Home';
import UserProvider from './components/context/user.provider';
import Order from './components/pages/users/Order';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import AdminHome from './components/pages/admin/AdminHome';
import AddProduct from './components/admin/AddProduct';
import AddCategory from './components/admin/AddCategory';
import ViewCategories from './components/admin/ViewCategories';
import ViewProducts from './components/admin/ViewProducts';
import AdminOrders from './components/admin/AdminOrders';
import AdminUsers from './components/admin/AdminUsers';


function App() {

 
  return (
  // setting up routing 
    <UserProvider>
     <BrowserRouter>
     <ToastContainer 
     position="bottom-center"
     closeOnClick
      theme='dark'
      transition={Flip}
     />
     <CustomNavbar/>
  
     <Routes>
       <Route path='/' element=<Index/> />
       <Route path='/about' element=<About/> />
       <Route path='/services' element=<Services/> />
       <Route path='/cart' element=<Cart/> />
       <Route path='/contact' element=<Contact/> />
       <Route path='/login' element=<Login/> />
       <Route path='/register' element=<Register/> />
       <Route path='/user' element=<Dashboard/> >
             {/*nested route me "/" allowed nai he and parent me outlet dena padega */}
           {/* <Route path='profile' element=<Profile/>/> */}
           <Route path='profile/:userId' element=<Profile/>/>
           <Route path='home' element=<Home/>/>
           <Route path='aboutUser' element=<AboutUser/>/>
           <Route path='orders' element=<Order/>/>

       </Route>

      <Route path='/admin' element=<AdminDashboard/>>
          <Route path='home' element=<AdminHome/>/>
          <Route path='addProduct' element=<AddProduct/>/>
          <Route path='addCategory' element=<AddCategory/>/>
          <Route path='categories' element=<ViewCategories/>/>
          <Route path='products' element=<ViewProducts/>/>
          <Route path='adminOrders' element=<AdminOrders/>/>
          <Route path='adminUsers' element=<AdminUsers/>/>
      </Route>
     </Routes>
     
   </BrowserRouter>
   </UserProvider>



  );

  
   

   
  
}

export default App;

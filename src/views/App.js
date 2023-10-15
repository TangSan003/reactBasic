import logo from './logo.svg';
import './App.scss';

import Home from './HomePage/Home';
import TodoApp from './Todo/TodoApp';
import About from './About/About';
import ListUser from './ListUser/ListUser';
import User from './ListUser/User';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './TopNavigationBar/Navigation';

import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <BrowserRouter>
          <>
            <Navigation/>
            <img src={logo} className="App-logo" alt="logo" />

            <Routes>
              <Route path="/" exact element={<Home />}/>
              <Route path="/todo" element={<TodoApp />}/>
              <Route path="/about"element={<About />}/>
              <Route path="/user"element={<ListUser />}/>
              <Route path="/user/:id"element={<User />}/>
              
            </Routes>

          </>
        </BrowserRouter>
       
        
      </header>



      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;

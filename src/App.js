
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

function App() {
  return (
   
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/sign-in' element={<Signin />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;

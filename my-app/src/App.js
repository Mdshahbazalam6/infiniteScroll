import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';



function App() {
const { loginStatus } = useSelector((store)=>store)
  return (
<>

{loginStatus ? <Routes >
  
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>

  </Routes>:  <Login />}

</>
  );
}

export default App;

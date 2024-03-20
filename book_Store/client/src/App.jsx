import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import { useState } from 'react';
function App() {
  const [role, setRole] = useState('')

  return (
    <BrowserRouter>
      <Navbar role = {role}/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='/login' element={<Login role = {setRole}/>}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/addstudent' element={<AddStudent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

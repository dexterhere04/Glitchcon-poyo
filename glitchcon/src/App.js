import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './authContext';
import "./App.css"

function App() {
  return (
    <div className='bg-color-App'>
     <AuthProvider>
      <Routes>
        <Route exact path = "/" element={<Login />}/>
        
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
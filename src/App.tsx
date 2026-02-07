import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Users from './components/Users'
import MainLayout from './Layout/MainLayout'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      
       <Routes>
        <Route element={<MainLayout/>}>
           <Route path='/' element={<Navigate to='/users' replace/>}/>
           <Route path='/users' element={<Users/>} />
           <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
       </Routes>
    </>
  )
}

export default App

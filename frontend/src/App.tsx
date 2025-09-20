import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import LandingPage from './pages/LandingPage'
import Dashbaord from './pages/dashboard/Dashboard'
import Chat from './pages/dashboard/Chat'
import Agents from './pages/dashboard/Agents'
import Wearables from './pages/dashboard/Wearables'
import Learning from './pages/dashboard/Learning'
import Payments from './pages/dashboard/Payments'
import Developer from './pages/dashboard/Developer'
import Settings from './pages/dashboard/Settings'
import Tools from './pages/dashboard/Tools'
import SignIn from './pages/auth/SignIn'
import ProtectedRoute from './components/custom/organisms/auth-protect/ProtectedRoute'
import AuthRoute from './components/custom/organisms/auth-protect/AuthRoute'
import { useProfile } from './hooks/useAuth'
import { useSelector } from 'react-redux'
import { RootState } from './store'


const App = () => {
  useProfile();
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app/chat' element={<Chat />} />
        <Route path='/app/tools' element={<Tools />} />
        <Route path='/app/agents' element={<Agents />} />
        <Route path='/app/wearables' element={<Wearables />} />
        <Route path='/app/ai-learning' element={<Learning />} />
        <Route path='/app/payments' element={<Payments />} />
        <Route path='/app/developers' element={<Developer />} />
        <Route path='/app/settings' element={<Settings />} />
        <Route path='/app' element={<ProtectedRoute><Dashbaord /></ProtectedRoute>} />
        <Route path='/signin' element={<AuthRoute><SignIn /></AuthRoute>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
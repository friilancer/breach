// These styles apply to every route in the application
'use client'
import '../styles/global.css';
import { User } from '../contexts'
import { useState } from 'react';
import { AppConstants } from '../lib/constants';
 
export default function RootLayout({ children }) {
  const [sessionUser, setSessionUser] = useState({
    id: '',
    categories: []
  })

  const saveSessionUser = (user) => {
    if(!user || !user?.id || !user?.token) return
    localStorage.setItem(AppConstants.STORAGE_KEYS.AUTH_TOKEN, user.token)
    sessionUser({
      id: user?.id,
      categories: []
    })
  }
  return (
    <User.Provider value={{
      sessionUser,
      saveSessionUser
    }}>
      <html lang='en'>
        <body>
          {children}
        </body>
      </html>
    </User.Provider>
  )
}
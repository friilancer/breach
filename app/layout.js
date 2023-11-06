// These styles apply to every route in the application
'use client'
import '../styles/global.css';
import { User } from '../contexts'
import { useEffect, useState } from 'react';
import { AppConstants } from '../lib/constants';
import axios from 'axios';
 
export default function RootLayout({ children }) {
  const [sessionUser, setSessionUser] = useState({
    id: '',
    interests: []
  })

  const [allInterests, setAllInterests] = useState([])

  const saveSessionUser = (user, callback) => {
    if(!user || !user?.userId || !user?.token) return
    localStorage.setItem(AppConstants.STORAGE_KEYS.AUTH_TOKEN, user.token)
    localStorage.setItem(AppConstants.STORAGE_KEYS.USER_ID, JSON.stringify(user.userId))
    setSessionUser({
      id: user.userId,
      interests: []
    })
    callback && callback()
  }

  const updateSessionUser = (params) => {
    setSessionUser(prev => ({
      ...prev,
      ...params
    }))
  }

  useEffect(() => {
    const getAllInterests = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URI}${AppConstants.API_ROUTES.CATEGORIES}`)
        setAllInterests(data)
      } catch (e) {
        alert('Failed to fetch interests')
      }
    }

    getAllInterests()
  }, [])

  useEffect(() => {}, [sessionUser.id])
  
  return (
    <User.Provider value={{
      sessionUser,
      saveSessionUser,
      allInterests,
      updateSessionUser,
    }}>
      <html lang='en'>
        <body>
          {children}
        </body>
      </html>
    </User.Provider>
  )
}
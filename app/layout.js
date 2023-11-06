// These styles apply to every route in the application
'use client'
import '../styles/global.css';
import { App } from '../contexts'
import { useEffect, useState } from 'react';
import { AppConstants } from '../lib/constants';
import axios from 'axios';
import io from 'socket.io-client'
 
export default function RootLayout({ children }) {
  const [sessionUser, setSessionUser] = useState({
    id: '',
    interests: []
  })
  const [socket, setSocket] = useState(null)

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

  const connectSocket = () => {
    try {
      let token = localStorage.getItem(AppConstants.STORAGE_KEYS.AUTH_TOKEN)
      console.log(token, process.env.NEXT_PUBLIC_SOCKET_URI)
      const Socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URI}`, {
        path: `/ws?token=${token}`,
        retries: 3,
        ackTimeout: 10000
      })
      setSocket(Socket)
    } catch (e) {
      console.log('error connecting socket', e)
    }
  }

  const getAllInterests = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URI}${AppConstants.API_ROUTES.CATEGORIES}`)
      setAllInterests(data)
    } catch (e) {
      alert('Failed to fetch interests')
    }
  }

  const updateSessionUser = (params) => {
    setSessionUser(prev => ({
      ...prev,
      ...params
    }))
  }

  useEffect(() => {
    connectSocket()
    getAllInterests()
  }, [])

  useEffect(() => {
    if(socket) {
      socket.on('connect', () => {
        console.log('connected')
      })
      socket.onAny((eventName, ...args) => {
        // ...
        console.log('On anyyyyyy', eventName, args)
      });
    } else{
      console.log('no socket')
    }

  }, [socket])

  useEffect(() => {}, [sessionUser.id])
  
  return (
    <App.Provider value={{
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
    </App.Provider>
  )
}
// These styles apply to every route in the application
'use client'
import '../styles/global.css';
import { App } from '../contexts'
import { Suspense, useEffect, useState } from 'react';
import { AppConstants } from '../lib/constants';
import axios from 'axios';
import io from 'socket.io-client'
import { NavigationEvent } from '../events';
 
export default function RootLayout({ children }) {
  const [sessionUser, setSessionUser] = useState({
    id: '',
    interests: []
  })
  const [socket, setSocket] = useState(null)

  const [allInterests, setAllInterests] = useState([])

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

  const getUserInterest = async({
    id,
    token
  }) => {
    try {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URI}${AppConstants.API_ROUTES.INTERESTS(id)}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      let interests = data.map(item => item?.category?.id) || []

      updateSessionUser({
        interests
      })

    } catch (e) {
    }
  }

  const saveSessionUser = async(user, callback) => {
    if(!user || !user?.userId || !user?.token) return
    localStorage.setItem(AppConstants.STORAGE_KEYS.AUTH_TOKEN, user.token)
    localStorage.setItem(AppConstants.STORAGE_KEYS.USER_ID, JSON.stringify(user.userId))
    setSessionUser({
      id: user.userId,
      interests: []
    })
    await getUserInterest({
      id: user.userId,
      token: user.token
    })
    callback && callback()
  }

  useEffect(() => {
    //connectSocket()
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

          <Suspense fallback={null}>
            <NavigationEvent />
          </Suspense>
        </body>
      </html>
    </App.Provider>
  )
}
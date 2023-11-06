import { useContext, useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { AppConstants } from '../lib/constants'
import { App } from '../contexts' 


function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { sessionUser } = useContext(App)
 
  console.log('The session user is', sessionUser)

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...

    if(!AppConstants.PUBLIC_PAGES.includes(pathname) && !sessionUser.id){
      console.log('redirecting to login', pathname)
      router.push('/login')
    }else{

    }

  }, [pathname, searchParams])
 
  return null
}


export default NavigationEvents

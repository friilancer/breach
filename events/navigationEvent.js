import { useContext, useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { AppConstants } from '../lib/constants'
import { App } from '../contexts' 


function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { sessionUser } = useContext(App)
 
  useEffect(() => {
    if(!AppConstants.PUBLIC_PAGES.includes(pathname) && !sessionUser.id) router.push('/login')

  }, [pathname, searchParams])
 
  return null
}


export default NavigationEvents

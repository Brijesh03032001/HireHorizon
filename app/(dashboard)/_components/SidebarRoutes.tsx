"use client"
import { BookMarked, Compass, Home, List, User } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import SidebarRouteItem from './SidebarRouteItems'


const adminRoutes = [
  {
    icon : List,
    label :"Jobs",
    href :"/admin/jobs"

},

{
   icon: List,
   label: "Companies",
   href: "/admin/companies"
},
{
    icon : List,
    label : "Analytics",
    href : "/admin/analytics"
}]

const guestRoutes = [

    {
        icon: Home,
        label: "Home",
        href: "/"
    },
    {
        icon: Compass,
        label: "Search",
        href: "/search"
    },
    {
        icon: BookMarked,
        label: "Saved Jobs",
        href: "/savedJobs"
    },
    {
        icon : User,
        label : "Profile",
        href: "/user"
    }
]
   

const SidebarRoutes = () => {
  const pathname = usePathname()
  const router = useRouter()

  const isAdminPage = pathname?.startsWith('/admin');
  const routes = isAdminPage ? adminRoutes : guestRoutes;   

  return (
    <div className="flex flex-col w-full">
        {routes.map((route) => (<SidebarRouteItem key={route.href} {...route} />))}
    </div>
  )
}

export default SidebarRoutes

"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface SidebarRouteItemProps {
  icon: React.ElementType
  label: string
  href: string
}

const SidebarRouteItem: React.FC<SidebarRouteItemProps> = ({ icon: Icon, label, href }) => {
    const pathname = usePathname()
    const router = useRouter()
    const isActive = 
    (pathname === "/" && href === "/") ||
    (pathname === href || pathname?.startsWith(`${href}/`));

    const onClick = () => {
        router.push(href);
    }

    return (
        <button
            onClick={onClick}
            className = {cn("flex items-center gap-x-2 text-neutral-500 font-[500] pl-6 transition-all hover:text-neutral-600 hover:bg-neutral-300/20", 
                isActive && "text-purple-700 bg-purple-300/20 hover:bg-purple-700/20 hover:text-purple-700")}
        >
            <div className='flex items-center gap-x-2 py-4'>
                <Icon size={20} className ={cn("text-neutral-500", isActive && "text-purple-700")} />
                <span>{label}</span>
            </div>
            {/* highlight colour */}
            <div className={cn("ml-auto opacity-0 border-2 border-purple-700 h-full transition-all", isActive && "opacity-100")}></div>
        </button>
    )
}

export default SidebarRouteItem;
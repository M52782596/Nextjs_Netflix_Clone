
import Link from 'next/link'

import React from 'react'

const Header = () => {
  /*   const router=useRouter(); */
    const menus=[
        {
            name:'About',
            url:'/about'
        },
        {
            name:'Movies',
            url:'/'
        },
        {
            name:'Contact',
            url:'/contact'
        },
        
    ]
  return (
   
    
    <div className='flex items-center gap-6 h-20 p-5 bg-slate-700 ' >
        
        <div className='bg-red-500 px-4 py-2 text-2xl font-bold text-white cursor-pointer' ><Link href="/" legacyBehavior ><a>MFilm</a></Link> </div>
        <div className='flex flex-1 items-center '> </div>
        <div  className='mx-5'>
            {
                menus && menus.map(menu=>{
                    return ( 
                    <Link href={menu.url} key={menu.name} legacyBehavior >
                    <a className='hover:bg-slate-500 p-3'>{menu.name}</a>
                    </Link>
                )
                })
            }
       
        </div>


    </div>



  )
}

export default Header
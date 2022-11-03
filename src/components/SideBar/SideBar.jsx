import React from 'react'
import SideItems from './SideItems/SideItems'

export default function SideBar() {
 const menuList = [{id:1,name:'Home'}, {id:2,name:'File'}, {id:3,name:'Edit'},{id:4,name:'Insert'}, {id:5,name:'Contact Us'}]
  return (
    <div className="w-1/5  h-screen pt-1.5 pl-1.5 bg-gray-400">
         <img className='w-32 pt-4 pl-2.5 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Intuit_QuickBooks_logo.svg/2560px-Intuit_QuickBooks_logo.svg.png"/>
         <ul className="flex pt-4  flex-col justify-between">
           {menuList.map(items => (
            <SideItems key={items.key} itemDetails={items}/>
           ))}
          </ul>
    </div>
  )
}

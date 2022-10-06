import React,{useState} from 'react'
import MenuItems from './MenuItems'

function Menu({}) {

  return (
    <div className=' w-2/12  p-1 h-full pb-4 overflow-y-scroll'>
        <div className='p-2'>
            <div className='flex items-center space-x-4'>
                <p className=' hidden lg:flex md:flex text-lg pb-2 font-semibold text-gray-500'>Favorites</p>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className='hidden lg:flex md:flex w-full bg-slate-50 h-24 rounded-md border border-gray-200 shadow-md'>

            </div>
        </div>
        <hr />
        <ul className='p-2 '>
            <MenuItems 
                icon={<i className="fas fa-cart-plus"></i>}
                item="Sales" 
                list={[
                        {description:'Sales Form', link:"/sales/"},
                        {description:"Edit Bil", link:"/sales/edit", color:"text-red-600"},
                        {description:"Report", link:"/reports/sales-purchase/sales", color:"text-green-600"}
                       ]} />
            <MenuItems 
                    icon={<i className="fas fa-shopping-bag"></i>}
                    item="Purchasing" 
                    list={[
                        {description:'Purchasing Form', link:"/purchase"},
                        {description:"Edit Bil", link:"", color:"text-red-600"},
                        {description:"Report", link:"/reports/sales-purchase/purchase", color:"text-green-600"}
                   ]} />
            <MenuItems 
                    icon={<i className="fas fa-undo-alt"></i>}
                    item="Returns" 
                    list={[
                        {description:'Returns Form', link:""},
                        {description:"Report", link:"", color:"text-green-600"}
                    ]} />
            <MenuItems 
                    icon={<i className="fas fa-exchange-alt"></i>}
                    item="Transfer" 
                    list={[
                        {description:'Transfer Form', link:""},
                    ]} />
            <MenuItems 
                    icon={<i className="fas fa-warehouse"></i>}
                    item="Stock" 
                    list={[
                        {description:"Report", link:"/reports/inventory/", color:"text-green-600"}
                    ]} />
            <MenuItems 
                    icon={<i className="fas fa-money-bill-wave"></i>}
                    item="Expenses" 
                    list={[
                        {description:"Customer Invoice", link:"", color:"text-green-600"},
                        {description:"Supplier Invoice", link:"", color:"text-green-600"}
                    ]}/>
            <MenuItems 
                    icon={<i className="fas fa-balance-scale-right"></i>}
                    item="Financial" 
                    list={[
                        {description:"Operation Report", link:"/reports/operation", color:"text-green-600"},
                    ]}/>
            <MenuItems 
                    icon={<i className="fas fa-database"></i>}
                    item="Master Data" 
                    list={[
                        {description:'Item Coding', link:"/masterData/items/itemcoding"},
                        {description:'Edit Items', link:"/masterData/items/edititems", color:"text-red-600"},
                        {description:"Customers Coding", link:""},
                        {description:"Edit Customers", link:"", color:"text-red-600"},
                        {description:"Suppliers Coding ", link:""},
                        {description:"Edit Suppliers", link:"", color:"text-red-600"},

                    ]} />
    </ul>
    </div>
  )
}

export default Menu
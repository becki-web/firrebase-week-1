import React from 'react'
import { ModeToggle } from './mode-toggle'
import { MenubarDemo } from './MenubarDemo'

const Navbar = () => {
  return (
    <div>
        <nav class="flex justify-between p-4 bg-red-500">
    <a href="#" class="text-white">Logo</a>
    <div class="relative group">
       
       
        <ModeToggle />
        <MenubarDemo />
       
        <div class="absolute left-0 hidden bg-white text-black shadow-lg mt-2 rounded-md w-48 group-hover:block group-focus:block">
            <ul class="space-y-2">
               
                <li><a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Home</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">About</a></li>
                
            
                <li class="absolute">
                    <a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Services</a>
                   
                    <ul class="absolute left-full top-0 hidden bg-white text-black shadow-lg mt-2 rounded-md w-48 group-hover:block group-focus:block">
                        <li><a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Web Design</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">SEO</a></li>
                        <li><a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">App Development</a></li>
                    </ul>
                </li>

                <li><a href="#" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navbar
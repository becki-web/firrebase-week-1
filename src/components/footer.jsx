import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer Section --> */}
<footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto px-6 text-center">
        {/* <!-- Footer Content --> */}
        <p class="text-sm">© 2025 Your Website. All Rights Reserved.</p>
        {/* <!-- Footer Links --> */}
        <div class="mt-4 space-x-6">
            <a href="#" class="text-white hover:text-gray-400">Privacy Policy</a>
            <a href="#" class="text-white hover:text-gray-400">Terms of Service</a>
            <a href="#" class="text-white hover:text-gray-400">About Us</a>
        </div>
    </div>
</footer>
<Button />
    </div>
  )
}

export default Footer
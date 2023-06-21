import '../css/tailwind.css';
import '../css/style.css';
import 'tw-elements';

import viteLogo from '../../public/vite.svg'

export const errorMessage = document.querySelector('.error');
export const checkoutButton = document.querySelector('#checkout-button');
export const checkoutTotal = document.querySelector('.total');

document.querySelector("header").innerHTML = `
<div class="fixed z-40 top-0 inset-x-0 bg-gray-800">
    <nav class="container flex justify-between px-4 mx-auto items-center ">
        <!-- vite & javascript logo -->
        <div class="flex">
            <a href="../index.html" target="_blank">
                <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
        </div>
        <!-- menu items -->
        <div id="menu" class="hidden space-x-8 lg:flex">
          <a href="../index.html" class="">Home</a>
        </div>
    </nav>
</div>
`;
document.querySelectorAll("footer").innerHTML = `
<div class="fixed z-40 bottom-0 inset-x-0 bg-gray-800"> 
  <div class="container flex justify-between px-4 mx-auto items-center ">   
    <div class="flex justify-between items-center h-12 px-6">
        <!-- text -->
        <div class="text-white">
            <p>bottom text with @something</p>
        </div>    
        <!-- contacts -->
        <div class="">
            <p class="font-bold">Email: <a href="#" class="text-white">name@email.com</a></p>
            <p class="font-bold">Phone: <a href="#" class="text-white">+11 222 33 444</a></p>
        </div>
    </div>
  </div>
</div>   
`;
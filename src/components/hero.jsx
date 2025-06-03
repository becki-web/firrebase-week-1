import heroimage from '../assets/pizza.jpg'


const Hero = () => {
  return (
    <div>
        <section 
        style={{ backgroundImage: `url(${heroimage})`}}
        class=" bg-cover bg-center h-[30rem] flex items-center justify-center text-center px-4 ">
    <div class="bg-black bg-opacity-50 p-8 rounded-lg">
      <h1 class="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">Delicious Pizza, Freshly Baked</h1>
      <p class="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6">Experience the taste of authentic pizza made with love.</p>
      <a href="#menu" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium">Order Now</a>
    </div>
  </section>
    </div>
  )
}

export default Hero
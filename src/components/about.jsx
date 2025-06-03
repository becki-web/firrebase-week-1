import aboutimage from '../assets/pizza.jpg'

const About = () => {
  return (
    <div>
        <section class="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
   
    <div class="md:w-1/2 text-left p-6">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
      <p class="text-lg text-gray-600 mb-6">
        Welcome to our pizza paradise! We are passionate about delivering the freshest, tastiest pizzas made with love. Our mission is to bring joy to your taste buds with every bite. Experience the difference with our hand-crafted recipes and finest ingredients.
      </p>
      <a href="#learn-more" class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium">
        Learn More
      </a>
    </div>
  
  
    <div class="md:w-1/2 p-6">
      <img src={aboutimage} alt="Delicious Pizza" class="rounded-lg shadow-lg" />
    </div>
  </section>
    </div>
  )
}

export default About
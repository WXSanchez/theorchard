
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarouselContain from './components/CarouselContain';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <hr className='w-[60%] mx-auto h-[2px] bg-gray-800'/>
      <CarouselContain />
    </div>
  );
}

export default App;

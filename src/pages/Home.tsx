import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Portfolio from '../components/sections/Portfolio';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Portfolio />
    </div>
  );
}

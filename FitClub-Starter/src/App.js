import './App.css';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/Hero';
import Join from './components/join/join';
import Plans from './components/Plans/Plans';
import Programs from './components/programs/program';
import Reasons from './components/Reasons/reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;

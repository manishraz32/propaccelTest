import HomePage from './components/HomePage';
import Price from './components/Price';
import Review from './components/Review';
import './App.css';

function App() {
  return (
    <div className="relative bg-default-white w-full h-[3007px] overflow-hidden text-left text-base text-default-white font-heading-heading-3">
      <HomePage />
      <Price />
      <Review />
    </div>
  );
}

export default App;

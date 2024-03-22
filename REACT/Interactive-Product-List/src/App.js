import './App.scss'
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import { useState } from 'react'; //

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categoryChange = (category) => {
    setSelectedCategory(category)
  }
  return (
    <div className="App">
      <Header clickChange={categoryChange} />
      <ProductCard category={selectedCategory} />
    </div>
  );
}

export default App


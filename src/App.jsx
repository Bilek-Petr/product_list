import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
   return (
      <>
         <div className="wrapper">
            <Header />
            <ProductList />
         </div>
      </>
   );
}

export default App;

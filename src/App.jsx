import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // const [title, setTitle] = useState("Welcome to My App");
  // const [age, setAge] = useState(20);
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 899 },
    { id: 2, title: 'Product 2', price: 769 },
    { id: 3, title: 'Product 3', price: 989 },
    { id: 4, title: 'Product 4', price: 871 },
    { id: 5, title: 'Product 5', price: 459 },
  ]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  const [name, setName] = useState('Raihan');

  useEffect (() => {
    console.log('Use Effect Running');
  }, [name]);

  // const changeTitle = () => {
  //   setTitle('Title Changed');
  //   setAge(40);
  // }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList products={products} deleteProduct={deleteProduct}/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      
      {/* <Header /> */}

      {/* <button onClick={() => setName('Joko')}>Change Name</button>
      <p>{name}</p> */}
      
      {/* <h1>{ title }</h1>
      <h1>Age: { age }</h1>
      <button onClick={ changeTitle }>Change Title</button> */}
    </div>
  )
}

export default App

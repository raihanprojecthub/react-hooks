import { useState } from "react";
import Header from "./components/Header";

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

  // const changeTitle = () => {
  //   setTitle('Title Changed');
  //   setAge(40);
  // }

  return (
    <div>
      <Header />
      {/* <h1>{ title }</h1>
      <h1>Age: { age }</h1>
      <button onClick={ changeTitle }>Change Title</button> */}
      <ul>
        { products.map((product) => (
          <li key={product.id}>{ product.title } - { product.price } </li>
        )) }
      </ul>
    </div>
  )
}

export default App

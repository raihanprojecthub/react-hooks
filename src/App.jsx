import Header from "./components/Header";

function App() {
  const title = "Welcome to My App";
  const age = 20;
  const link = "https://raihan-ramadhan.my.id/";

  const clickMe = (name) => {
    console.log('Hello: '+ name);
  }

  return (
    <div>
      <Header />
      <h1>{ title }</h1>
      <h1>{ age * 2 }</h1>
      <a href={link}>Go To My Website</a>
      <button onClick={ () => clickMe('Raihan') }>Click Me</button>
    </div>
  )
}

export default App

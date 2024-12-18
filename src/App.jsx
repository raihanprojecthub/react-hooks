import Header from "./components/Header";

function App() {
  const title = "Welcome to My App";
  const age = 20;
  const link = "https://raihan-ramadhan.my.id/";

  return (
    <div>
      <Header />
      <h1>{ title }</h1>
      <h1>{ age * 2 }</h1>
      <a href={link}>Go To My Website</a>
    </div>
  )
}

export default App

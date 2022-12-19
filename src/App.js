import { useEffect } from "react";
import "./App.css";

function App() {
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = res.json();
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;

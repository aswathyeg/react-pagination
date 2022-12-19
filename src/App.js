import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    //console.log(data);
    if (data && data.products) {
      setProducts(data.products);
    }
    console.log(products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="products">
      {products.length > 0 &&
        products.map((prod) => {
          return (
            <span>
              <img src={prod.thumbnail} alt={prod.title} />
            </span>
          );
        })}
    </div>
  );
}

export default App;

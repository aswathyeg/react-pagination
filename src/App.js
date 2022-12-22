import { useEffect, useState } from "react";
import "./App.css";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
//
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
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
  const handleClickPages = (selectedPage) => {
    setPage(selectedPage);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span className="products__single">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span>
            <BsFillCaretLeftFill />
          </span>

          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                key={i}
                className={
                  page === i + 1 ? "pagination__selected" : "pagination"
                }
                onClick={() => handleClickPages(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span>
            <BsFillCaretRightFill />
          </span>
        </div>
      )}
    </div>
  );
}

export default App;

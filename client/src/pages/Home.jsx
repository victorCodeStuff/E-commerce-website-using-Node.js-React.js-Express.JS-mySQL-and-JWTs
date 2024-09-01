import "./css/home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/productPage.css";
import redirectClick from "../utils/utils";
function Home() {
  const [products, setProducts] = useState([true]);
  const productsToBeShown = ["1", "3", "4", "5"];
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/homeProducts", {
        params: { productsToBeShown },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <section className="slideContainer">
        <div className="slider-wrapper">
          <div className="slider">
            <img
              id="slide-1"
              src="./public/productsImages/slideImgs/1.jpg"
              alt="3Slide of the Book Lord Of the Rings"
            />
            <img
              id="slide-2"
              src="./public/productsImages/slideImgs/2.jpg"
              alt="Slide of the Comic Book Wolverine X"
            />
            <img
              id="slide-3"
              src="./public/productsImages/slideImgs/3.jpg"
              alt="Slide of the Book Animal Farm"
            />
          </div>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
      <section className="productsHomeContainer">
        {products.map((item) => (
          <div
            id={item.id}
            name={`${item.productsName}`}
            onClick={redirectClick}
            className={`productsContainer`}
            key={item.id}
          >
            <div className="productImg">
              <img
                src={
                  "/productsImages/product" +
                  item.id +
                  "/product_" +
                  item.id +
                  ".png"
                }
              ></img>
            </div>
            <div className="productDesc">
              <h3 className="productTitle">{item.productsName}</h3>
              <p> {item.category}</p>
              <h3>{item.price}</h3>
            </div>
          </div>
        ))}
      
     
      </section>
    
  
	  
    

	 </>
  );
}

export default Home;

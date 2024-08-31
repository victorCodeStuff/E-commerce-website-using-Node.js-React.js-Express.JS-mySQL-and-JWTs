import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/productPage.css"

import axios from "axios";
import redirectClick from "../utils/utils";
const Search = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const { searchKeyWord } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/search", {
          params: {
            search: `%${searchKeyWord}%`,
          },
        });
        setCurrentProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchKeyWord]);
  const SearchedProduct = currentProducts;
  return (
    <>
      <>
        <div className="productsPage">
          
          {SearchedProduct.map((item) => (
            <div
              id={item.id}
              name={`${item.productsName}`}
              onClick={redirectClick}
              className={`productsContainer`}
              key={item.id}
            >
              <div className="productImg">
                <img
                  src={"/productsImages/product" + item.id + "/product_"+item.id +".jpg"}
                ></img>
              </div>
              <div className="productDesc">
                <h3 className="productTitle"> {item.productsName}</h3>
                <p> {item.category}</p>
                <h3>{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Search;

import axios, { all } from "axios";
import { useEffect, useState } from "react";

import redirectClick from "../utils/utils";
const Product = () => {
  const [products, setProducts] = useState([true]);

  // list of input boxes to be mapped
  var currentCategories = [
    {
      name: "Literature & Fiction",
    },
    {
      name: "Programming",
    },
    {
      name: "Manga & Comics",
    },
    {
      name: "Fantasy",
    },
    {
      name: "Poetry",
    },
  ];

  var filteringSystem = [
    "Literature & Fiction",
    "Programming",
    "Manga & Comics",
    "Fantasy",
    "Poetry",
  ];
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products", {
        params: { filteringSystem },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleFIltering = (event) => {
    /*
      Filtering System Overview:
      - Uses a `filteringSystem` array to store category filters.
      - Array contains four elements representing server-side categories.
      - Server-side query utilizes the `filteringSystem` array to filter products.
      - How Checkboxes states affects array values:
      - Unchecked: Category value is set to 'undefined', making the query of this category impossible.
      - Checked: Category is included in the query.
*/
    console.log(event.target.id);
    var checkedBoxes = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    );
    var checkedValues = checkedBoxes.map((box) => box.value);
    for (let i = 0; i < filteringSystem.length; i++) {
      if (filteringSystem[i] !== checkedValues[i]) {
        if (!checkedValues.includes("All")) {
          filteringSystem[i] = checkedValues[i];
        } else {
          for (let i = 0; i < filteringSystem.length; i++) {
            filteringSystem[i] = currentCategories[i].name;
          }
        }
      }
    }
    fetchData();
  };

  return (
    <>
      <div className="productWrapper">
        <div id="filterDiv">
          <label>
            <input type="checkbox" value="All" />
            All
          </label>
          {currentCategories.map((categories) => (
            <label key={categories.name}>
              <input
                type="checkbox"
                value={categories.name}
                id={categories.name}
              />
              {categories.name}
            </label>
          ))}
          <button onClick={handleFIltering}></button>
        </div>

        <div className="productsPage">
          {products.map((item) => (
            <div
              id={item.id}
              name={`${item.productsName}`}
              onClick={redirectClick}
              className={`productsContainer ${item.productsName}`}
              key={item.id}
            >
              <div id="productImg">
                <img
                  src={"/productsImages/product" + item.id + "/product_1.jpg"}
                ></img>
              </div>
              <div id="productDesc">
                <h3 className="productTitle"> {item.productsName}</h3>
                <p> {item.category}</p>
                <h3>{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;

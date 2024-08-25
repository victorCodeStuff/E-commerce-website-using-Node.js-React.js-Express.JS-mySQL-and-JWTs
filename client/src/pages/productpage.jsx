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
  // Get reference to "All" checkbox
  const allCheckBox = document.getElementById("All");


  useEffect(() => {
    fetchData()
    
   
   
  }, []);

  // Get all checked checkboxes (assuming class name is "checkbox")
 


  const allCheck = (event) => {
    const categoryCheckBoxes = document.querySelectorAll(".checkbox");
    // If "All" is checked, uncheck all categories
    let checkedBoxes = document.querySelectorAll("input[type=checkbox]:checked")
    console.log(checkedBoxes.length)
    if (event.target.id === "All") {
      categoryCheckBoxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      
    } 
    else if(checkedBoxes.length === 0){
      allCheckBox.checked = true;
    }
    
    else if (event.target.id !== "All") {
      // If a category is checked, uncheck "All"
      allCheckBox.checked = false;
    }

  };

  const handleFIltering = () => {
    /*
      Filtering System Overview:
      - Uses a `filteringSystem` array to store category filters.
      - Array contains four elements representing server-side categories.
      - Server-side query utilizes the `filteringSystem` array to filter products.
      - How Checkboxes states affects array values:
      - Unchecked: Category value is set to 'undefined', making the query of this category impossible.
      - Checked: Category is included in the query.
*/
    var checkedBoxes = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    );
    
    var checkedValues = checkedBoxes.map((box) => box.value);
    for (let i = 0; i < filteringSystem.length; i++) {
      if (
        (filteringSystem[i] !== checkedValues[i]) &
        !checkedValues.includes("All")
      ) {
        filteringSystem[i] = checkedValues[i];
      } else if (checkedValues.includes("All") & (checkedValues.length <= 1)) {
        filteringSystem[i] = currentCategories[i].name;
        console.log(filteringSystem)
      }
    
      
    }fetchData();
  };

  return (
    <>
      <div className="productWrapper">
        <div id="filterDiv">
          <label>
            <input type="checkbox" checked id="All" value="All" onChange={allCheck} />
            All
          </label>
          {currentCategories.map((categories) => (
            <label key={categories.name}>
              <input
                type="checkbox"
                value={categories.name}
                className="checkbox"
                onChange={allCheck}
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
              className={`productsContainer`}
              key={item.id}
            >
              <div id="productImg">
                <img
                  src={"/productsImages/product" + item.id + "/product_" + item.id + ".jpg"}
                ></img>
              </div>
              <div id="productDesc">
                <h3 className="productTitle">{item.productsName}</h3>
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

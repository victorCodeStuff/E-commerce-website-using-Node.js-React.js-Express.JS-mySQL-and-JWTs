import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([true]);
  const [selectedIds, setSelectedIds] = useState([]);
  const navigate = useNavigate();

  var currentCategories = [
    {
      name: "All",
      value: "All",
    },
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
    "Manga & Comics",
    "Programming",
    "Poetry",
    "Literature & Fiction",
    "Fantasy",
  ];

  useEffect(() => {
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

    fetchData();
  }, []);

  const handleCheckBoxesChanges = (event) => {
    const checkedId = event.target.value;
    if (event.target.checked) {
      setSelectedIds([...selectedIds, checkedId]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== checkedId));
    }
  };

  const handleProductId = (event) => {
   
    const currentProduct = event.currentTarget
    const currentProductWithouFirstClass = Array.from(currentProduct.classList).slice(1)
    const currentProductJoin = currentProductWithouFirstClass.join(' ')
  
    navigate(`/product/${currentProduct.id}/${currentProductJoin}`)
   // console.log()    
  };
  return (
    <>
      <div id="filterDiv">
        {currentCategories.map((categories) => (
          <label key={categories.name}>
            <input
              type="checkbox"
              value={categories.name}
              id={categories.name}
              checked={selectedIds.includes(categories.name)}
              onChange={(event) => {
                handleCheckBoxesChanges(event);
              }}
            />
            {categories.name}
          </label>
        ))}
      </div>

      <div className="productsPage">
        {products.map((item) => (
          <div
            id={item.id}
            name={`${item.productsName}`}
            onClick={handleProductId}
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
    </>
  );
};

export default Product;

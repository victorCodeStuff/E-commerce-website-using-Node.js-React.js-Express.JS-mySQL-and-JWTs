import axios, { all } from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([true]);
  const [isCheckedAll, setIsCheckedAll] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };

    fetchData();
  }, []);
const handleChange =(event)=>{
  const allCheck = document.getElementById("allCheck")
  const checkBoxes = document.getElementsByClassName("checkboxes")
  setIsCheckedAll(event.target.checked)
  if (allCheck.checked){
    checkBoxes.checked = false
  }
}

  return (
    <>
      <div id="filterDiv">
        <p>CHOOSE THE CATEGORY OF THE BOOK:</p>
        <label>
          <input
            onChange={handleChange}
            type="checkbox"
            className="allCheck"
            id="allCheck"
            checked={isCheckedAll}
          />
          All
        </label>
        <label></label>
        <label>
          <input
            type="checkbox"
            value="text"
            className="checkboxes"
            name="checkboxes"
       
          />
          Literature & Fiction
        </label>
        <label>
          <input
            type="checkbox"
            value="text"
            className="checkboxes"
            name="checkboxes"
                />
          Poetry
        </label>
        <label>
          <input
            type="checkbox"
            value="text"
            className="checkboxes"
            name="checkboxes"
          />
          Programming
        </label>
        <label>
          <input
            type="checkbox"
            name="checkboxes"
            value="text"
            className="checkboxes"
          />
          Fantasy
        </label>
      </div>
      <div className="productsPage">
        {products.map((item) => (
          <div className="productsContainer" key={item.id}>
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

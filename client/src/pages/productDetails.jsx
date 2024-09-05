import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/css/productPage.css";
import "../pages/css/singleProduct.css";

function ProductDetails() {
  const [product, setProduct] = useState(); // State to store the product data.
  const { productName,productId } = useParams(); // Extracts productName and productId from the URL parameters.
  const [isSeeMore, setSeeMoreClicked] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/productsDetails",
          {
            // Sends productName and productId to the server.
            params: {
              productName: productName,
              productId: productId,
            },
          }
        );
        // Updates state with the fetched product data.
        setProduct(response.data);
      } catch (error) {
        // Logs errors if the data fetch fails.
        console.error("error fetching data:", error);
      }
    };

    fetchData();
  }, [productName, productId]);

  if (!product) {
    // Displays a loading message if product data is not yet available.
    return <div>Loading Product Details...</div>;
  }
  const productInfo = product;
  const desc = () => {
    setSeeMoreClicked(!isSeeMore);// Toggles the "See More" state for the product description.
  };

  const productDesc = productInfo[0].productDesc;
  return (
    <>
      <div className="productDetailsWrapper">
    
        {/* Class name fix */}
          <div className="product-img">
            {/* Displays the product image. */}
            <img
              src={
                "/productsImages/product" +
                productInfo[0].id +
                "/product_" +
                productInfo[0].id +
                ".png"
              }
            ></img>
            <p style={{ height: isSeeMore ? "fit-content" : "100px" }}>
              {productDesc}
            </p>
            <button id="seeMoreButton" onClick={desc}>
              {isSeeMore ? "SEE LESS" : "SEE MORE ⇩"}
            </button>
          </div>
          <div className="product-info">
            <div>
              <h3>{productInfo[0].productsName} </h3>
              <h2>{productInfo[0].price}$</h2>
              <h4>{productInfo[0].category}</h4>
            </div>

            <button className="buyButton" type="button">
              <h2>BUY NOW</h2>
            </button>
          </div>
      </div>
    </>
  );
}

export default ProductDetails;

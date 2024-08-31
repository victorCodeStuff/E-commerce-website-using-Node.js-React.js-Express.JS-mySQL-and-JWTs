import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../pages/css/productPage.css";
import "../pages/css/singleProduct.css";

function ProductDetails() {
  const [product, setProduct] = useState();
  const { productName } = useParams();
  const { productId } = useParams();
  const [isSeeMore, setSeeMoreClicked] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/productsDetails",
          {
            params: {
              productName: productName,
              productId: productId,
            },
          }
        );
        setProduct(response.data);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };

    fetchData();
  }, [productName, productId]);

  if (!product) {
    return <div>Loading Product Details...</div>;
  }
  const productInfo = product;
  const desc = () => {
    setSeeMoreClicked(!isSeeMore);
  };

  const productDesc = productInfo[0].productDesc;
  return (
    <>
      <div className="productDetailsWrapper">
        {" "}
        {/* Class name fix */}
          <div className="product-img">
            <img
              src={
                "/productsImages/product" +
                productInfo[0].id +
                "/product_" +
                productInfo[0].id +
                ".jpg"
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

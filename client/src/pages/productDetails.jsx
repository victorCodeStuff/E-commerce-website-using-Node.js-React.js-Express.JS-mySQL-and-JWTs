import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { productName } = useParams();
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/productsdetails",
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
  }, []);
  const productInfo = product[0];
  console.log(productInfo.productsName);
  return (
    <>
      <div id="productWrapper">
        <div>
          <div className="productImage">
            <img
              src={`/productsImages/product${productInfo.id}/product_1.jpg`}
            ></img>
          </div>
          <div className="productInfo"></div>
        </div>
        <div id="productDesc"></div>
      </div>
    </>
  );
}

export default ProductDetails;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Product from "./productpage";

function ProductDetails() {
  const [product, setProduct] = useState([]);

  var productId = ["4"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/productsdetails",
          {
            params: {
              productId,
            },
          }
        );
        console.log(JSON.stringify(response.data.productsName));
        setProduct(response.data);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  var productInfo = product[0]

  return (
    <>
      <div>
        {product.map((singleProduct) => (
          <p key={singleProduct.productsName}>{singleProduct.productsName}</p>
        ))}
      </div>
    </>
  );
}

export default ProductDetails;

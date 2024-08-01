import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/css/productPage.css'

function ProductDetails() {
  const [product, setProduct] = useState(null);
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
  }, [productId]);

  if (!product){

    return <div>
      Loading Product Details...
    </div>
  }


 var productInfo = product;
 console.log(productInfo)
 console.log(productInfo[0].id)
 return (
    <>
      <div id="productWrapper">
        <div id="productImage">
             <img src={"/productsImages/product" + (productInfo[0].id) + "/product_1.jpg"} ></img>
        </div>
       
        <div id="productName">
          {productInfo[0].productsName}
        </div>
        <div id="productInfo">

        </div>
      </div>
    </>
  );
}

export default ProductDetails;

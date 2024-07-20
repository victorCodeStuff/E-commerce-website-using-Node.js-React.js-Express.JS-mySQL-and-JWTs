import axios from "axios";
import { useEffect } from "react";
function ProductDetails () {
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
    
  return (
   
    <>
    <div >
      
         
    </div>
    </>
  );
}

export default ProductDetails
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Search = () => {
  const {searchKeyWord} = useParams();
  const {currentProduct, setCurrentProducts} = useState()

  useEffect(() => {
    console.log(searchKeyWord)
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/search", {
          params: {
            search: `%${searchKeyWord}%`,
          },});
        setCurrentProducts(response.data);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    };
    fetchData();
  });


  return <>
 
  </>;

};

export default Search;

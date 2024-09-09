export default function redirectClick(event) {
    /* 
    after you click on a displayed product 
    you will redirect to his respective page
    */
    const currentProduct = event.currentTarget;
    let productName = currentProduct.getAttribute("name");
    window.location.replace(
      `/product/${currentProduct.id}/${productName}`
    );
     
  }
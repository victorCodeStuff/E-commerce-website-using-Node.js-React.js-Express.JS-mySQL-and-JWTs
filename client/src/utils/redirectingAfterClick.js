export default function redirectClick(event) {
  /* after you click on a displayed product you will redirect
  to his own page
  */
  const currentProduct = event.currentTarget;
  console.log(currentProduct.id)
  const currentProductWithouFirstClass = Array.from(
    currentProduct.classList
  ).slice(1);
  const currentProductJoin = currentProductWithouFirstClass.join(" ");
  window.location.replace(
    `/product/${currentProduct.id}/${currentProductJoin}`
  );
}

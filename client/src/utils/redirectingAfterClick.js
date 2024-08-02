export default function redirectClick(event) {
  /* after you click on a displayed product you will redirect
  to his own page
  */
  const currentProduct = event.currentTarget;
  const currentProductWithouFirstClass = Array.from(
    currentProduct.classList
  ).slice(1);
  const currentProductJoin = currentProductWithouFirstClass.join(" ");
  window.location.replace(
    `${window.location.pathname}/${currentProduct.id}/${currentProductJoin}`
  );
}

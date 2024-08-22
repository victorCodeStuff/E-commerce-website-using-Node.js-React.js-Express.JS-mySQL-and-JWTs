import React from 'react'

function ProductPage() {
  return (
    <div className="productsPage">
    {products.map((item) => (
      <div
        id={item.id}
        name={`${item.productsName}`}
        onClick={redirectClick}
        className={`productsContainer`}
        key={item.id}
      >
        <div id="productImg">
          <img
            src={"/productsImages/product" + item.id + "/product_" + item.id + ".jpg"}
          ></img>
        </div>
        <div id="productDesc">
          <h3 className="productTitle">{item.productsName}</h3>
          <p> {item.category}</p>
          <h3>{item.price}</h3>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductPage
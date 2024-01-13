/*
 * Shopping Cart Requirements:
 * - Before you start, please run `npm run start:api` to start mock API server
 * - data for mock APIs come from ./db/db.json
 * - There are 2 APIs you need to call:
 *     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
 *     - http://localhost:4002/products : this will provide a list of products with full details
 *
 * We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
 * product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
 * inside table#shopping-cart-tbl as below:
 * ID     Item
 * 1001   TV
 * 1002   iPad
 *
 * */
const View = {
  init: async () => {
    const tbodyElem = document
      .getElementById("shopping-cart-tbl")
      .querySelector("tbody");

    let cart = await fetch("http://localhost:4002/cart").then((response) =>
      response.json()
    );

    let shoppingItems = await fetch("http://localhost:4002/products").then(
      (response) => response.json()
    );

    //filtering out item details from products which are in cart

    let cartItems = shoppingItems.filter((item) => {
      return cart.some((car) => {
        return car.id === item.id;
      });
    });

    for (let i = 0; i < cartItems.length; i++) {
      const row = tbodyElem.insertRow();
      const newCellId = row.insertCell(0);
      const newCellItem = row.insertCell(1);
      const idData = document.createTextNode(cartItems[i]?.id);
      const itemName = document.createTextNode(cartItems[i]?.name);
      newCellId.appendChild(idData);
      newCellItem.appendChild(itemName);
    }
  },
};
document.addEventListener("DOMContentLoaded", View.init);

import React, { useState } from "react";

function CoffeeShop() {
  const [selectedItems, setSelectedItems] = useState([]);
  const menu = [
    {
      id: 1,
      name: "Espresso",
      price: 2.5,
      image: "/images/espresso.jpeg",
    },
    {
      id: 2,
      name: "Latte",
      price: 3.5,
      image: "/images/latte.jpeg",
    },
    {
      id: 3,
      name: "Cappuccino",
      price: 3,
      image: "/images/cappuccino.jpeg",
    },
    {
      id: 4,
      name: "Mocha",
      price: 4,
      image: "/images/mocha.jpeg",
    },
    {
      id: 5,
      name: "Americano",
      price: 3,
      image: "/images/americano.jpeg",
    },
  ];

  const addItemToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeItemFromCart = (id) => {
    const updatedItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(updatedItems);
  };

  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <h1>Welcome to Our Coffee Shop</h1>
      <div className="column">
        <div className="col-md-12 ">
          <h2>Menu</h2>
          <ul className="list-group">
            {" "}
            <table>
              <tr class="row">
                {menu.map((item) => (
                  <td class="col col-2">
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <table>
                        <td>
                          <tr>
                            {" "}
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-thumbnail mr-3"
                              style={{ maxWidth: "100px" }}
                            />
                          </tr>
                          <tr class="row m-3">
                            {" "}
                            {item.name} - ${item.price}
                          </tr>
                          <tr class="row m-3">
                            <button
                              className="btn btn-primary"
                              onClick={() => addItemToCart(item)}
                            >
                              Add to Cart
                            </button>
                          </tr>
                        </td>
                      </table>
                    </li>
                  </td>
                ))}{" "}
              </tr>{" "}
            </table>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Cart</h2>
          <ul className="list-group">
            <table>
              <td>
                {selectedItems.map((item) => (
                  <tr>
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-thumbnail mr-3"
                        style={{ maxWidth: "100px" }}
                      />
                      {item.name} - ${item.price}
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </li>
                  </tr>
                ))}
              </td>
            </table>
          </ul>
          <table class="h2">
            <tr>
              <td> Total: </td>
              <td class="text-success"> ${totalPrice.toFixed(2)} </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop;

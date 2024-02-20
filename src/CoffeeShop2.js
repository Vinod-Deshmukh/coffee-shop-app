import React, { useState } from "react";

function CoffeeShop2() {
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
      <nav class="navbar navbar-dark bg-dark">
        <div class="row col-lg-12 ">
          <a class="navbar-brand" href="http://localhost:3000/#">
            <div class="column">
              {" "}
              <img
                src="/images/americano.jpeg"
                width="50"
                height="50"
                class="d-inline-block align-top"
                alt=""
              />
            </div>
            <div class="column">The Coffee Shop</div>
          </a>
        </div>
      </nav>
      <div className="column">
        <div className="col-lg-12 col-md-6">
          <br />
          <h2>Menu</h2>
          <br />
          <div className="list-group">
            {" "}
            <div class="row ">
              {menu.map((item) => (
                <div class="col">
                  <div
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div class="row">
                      <div>
                        {" "}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-thumbnail mr-3"
                          style={{ Width: "200px", minHeight: "200px" }}
                        />
                      </div>
                      <div class="h5">
                        {" "}
                        {item.name} - ${item.price}
                      </div>
                      <div>
                        <button
                          className="btn btn-primary"
                          onClick={() => addItemToCart(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>{" "}
          </div>
        </div>
        <div className="column  ">
          <div>
            <div className="col-lg-12">
              <br />
              <h2>Cart</h2>
              <br />
              <div className="list-group">
                <div className="column">
                  {selectedItems.map((item) => (
                    <div className="row col-md-5">
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div className="column col-lg-4">
                          {" "}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-thumbnail mr-3"
                            style={{ Width: "100px", Height: "100px" }}
                          />
                        </div>
                        <div className="column">
                          {item.name} - ${item.price}
                        </div>
                        <div className="column">
                          <button
                            className="btn btn-danger"
                            onClick={() => removeItemFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <table class="h2">
              <tr>
                <td> Total: </td>
                <td class="text-success"> ${totalPrice.toFixed(2)} </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeShop2;

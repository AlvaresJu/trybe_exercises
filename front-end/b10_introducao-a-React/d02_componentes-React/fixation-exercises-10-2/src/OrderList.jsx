import React from 'react';
import Order from './Order';

class OrderList extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className='orderList'>
        <h1>Fixation Exercise 2 - Components composition</h1>
        <h2> Orders recently created </h2>
        <Order order={headphone}/>
        <Order order={energyDrink}/>
      </div>
    );
  }
}

export default OrderList;

import React from 'react';
import ItemName from './item-container/product-name.js';
import BasketImgItem from './item-container/image.js';

const shoppingBasket = {
  items: [{
    itemName: 'Kärcher K4 Full Control Pressure Washer',
    itemURL: 'http://www.amazon.co.uk/gp/product/B0198VLMLC?ref_=gbps_tit_s-3_8407_d3ac7b06&smid=A3P5ROKL5A1OLE',
    itemPrice: '£118.99',
    itemImgURL: 'http://ecx.images-amazon.com/images/I/81haNKekOoL._SL1500_.jpg',
    quantity: 1
  }, {
    itemName: 'Anglepoise Type 75 Desk Lamp, Jet Black [Energy Class A]',
    itemURL: 'http://www.amazon.co.uk/gp/product/B001027J38?ref_=gbps_img_s-3_8407_eccd2ca2&smid=A3P5ROKL5A1OLE',
    itemPrice: '£59.99',
    itemImgURL: 'http://ecx.images-amazon.com/images/I/51GYbTD1nxL._SL1296_.jpg',
    quantity: 2
  }],

}

class Basket extends React.Component {

  // moduleDidMount () {
  //   make a call to db to find what is in basket
  //   call function which loops through data and creates shopping basket items
  // }

  constructor () {
    super();
    this.state = {
      shoppingBasket: shoppingBasket
    }

  }



  render(){
    return (

      <ul>
        
        {this.state.shoppingBasket.items.map((item) => {
          return (<li>
            <ItemName itemURL={item.itemURL} itemName={item.itemName} />
            <BasketImgItem itemImgURL={item.itemImgURL} />
          </li>
        )})
        }
      // <ItemName itemURL='http://www.amazon.co.uk/gp/product/B009343NAS?psc=1&redirect=true&ref_=ox_sc_act_title_1&smid=AHD02A7W27OXM' itemName='Red Wing Beckman Mens Laced Leather Boots' />
      // <BasketImgItem itemImgURL='https://images-eu.ssl-images-amazon.com/images/I/51qSAqK2S2L._SS100_.jpg' />
      </ul>
    );
  }

}

export default Basket;

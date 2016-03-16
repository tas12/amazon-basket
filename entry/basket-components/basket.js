import React from 'react';
import ItemName from './item-container/product-name.js';
import BasketImgItem from './item-container/product-name.js';

class Basket extends React.Component {

  // moduleDidMount () {
  //   make a call to db to find what is in basket
  //   call function which loops through data and creates shopping basket items
  // }

  constructor () {
    super();
    this.state = {

    }

  }



  render(){
    return (
      <div>
      // <ItemName itemURL={this.props.itemURL} itemName={this.props.itemName}/>
      <ItemName itemURL='http://www.amazon.co.uk/gp/product/B009343NAS?psc=1&redirect=true&ref_=ox_sc_act_title_1&smid=AHD02A7W27OXM' itemName='Red Wing Beckman Mens Laced Leather Boots' />
      <BasketImgItem itemImgURL='https://images-eu.ssl-images-amazon.com/images/I/51qSAqK2S2L._SS100_.jpg' />
      </div>
    );
  }

}

export default Basket;

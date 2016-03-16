import React from 'react';

var productdata = {
    product: "a book",
    price: "5"
}

class Basket extends React.Component {
  render(){
    return (

        <Image src="productdata.image">
        <div className="basketcontainer">
            <div className="itemcontainer">
                <Image />

            </div>

        </div>
    );
  }
}

export default Basket;

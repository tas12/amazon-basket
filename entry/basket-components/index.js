import React from 'react'

import ItemContainer from './item-container/'

class Basket extends React.Component {

  render () {
    return (
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {this.props.shoppingBasket.items.map((item, index) => {
            return (
                <ItemContainer key={index} itemInfo={item} />
            )
          })}
        </tbody>
      </table>
    )
  }

}

Basket.propTypes = {
  shoppingBasket: React.PropTypes.obj.isRequired
}

export default Basket

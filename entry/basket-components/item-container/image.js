import React from 'react';

const style = {
  width: '50px',
  height: '50px'
};

class BasketImgItem extends React.Component {
  render () {
    return (
      <img style={style} src={this.props.itemImgURL}/>
    )
  }
}


export default BasketImgItem;

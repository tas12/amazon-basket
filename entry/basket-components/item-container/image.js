import React from 'react';

const BasketImgItem = (props) => <img src={props.itemImgURL}>

BasketImgItem.propTypes = {
  itemImgURL: React.PropTypes.string.isRequired
};

export default BasketImgItem;

import React from 'react';

const ItemName = (props) => <a href={props.itemURL}>{props.itemName}</a>

ItemName.propTypes = {
  itemURL: React.PropTypes.string.isRequired,
  itemName: React.PropTypes.string.isRequired
};

export default ItemName;

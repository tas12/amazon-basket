import React from 'react';

const ItemName = (props) => <div><a href={props.itemURL}>{props.itemName}</a></div>;

// ItemName.propTypes = {
//   itemURL: React.PropTypes.string.isRequired,
//   itemName: React.PropTypes.string.isRequired
// };

export default ItemName;

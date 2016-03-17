import React from 'react'

const ItemName = (props) => <div><a href={props.url}>{props.itemName}</a></div>

ItemName.propTypes = {
  url: React.PropTypes.string.isRequired,
  itemName: React.PropTypes.string.isRequired
}

export default ItemName

import React from 'react';

const Button = (props) => <button onClick={props.buttonFunction}>{props.buttonName}</button>;

Button.propTypes = {
    buttonName: React.PropTypes.string.isRequired,
    buttonFunction: React.PropTypes.func.isRequired
};

export default Button;

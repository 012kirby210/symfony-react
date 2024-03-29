import React, {Component} from "react";
import PropTypes from "prop-types";

export default function Button(props){

    const {className, ...otherProps} = props;

    return (
        <button className={`btn ${props.className}`}
            {...otherProps}
        >
            {props.children}
    </button>);
}

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: ''
}
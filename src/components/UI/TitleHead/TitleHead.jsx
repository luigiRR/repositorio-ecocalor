import React from 'react';
import PropTypes from 'prop-types';

const TitleHead = (props) => {
    return(
        <h1 className="container uppercase font-bold text-2xl text-center text-green-600">
            {props.children}
        </h1>
    )
}

TitleHead.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default TitleHead;